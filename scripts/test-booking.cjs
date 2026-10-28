/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader isolates app imports and mocks email delivery. */
// Transpile the actual app modules in memory. No server, credentials, or network
// requests are used: Resend is replaced before the route module is loaded.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { test } = require('node:test');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  }).outputText, filename);
}
const messages = [];
let sendError = null;
const load = Module._load;
Module._load = function (id, parent, main) {
  if (id === 'resend') return { Resend: class { emails = { send: async (message, options) => { messages.push({ ...message, _options: options }); return { error: sendError }; } }; } };
  return load.call(this, id.startsWith('@/') ? path.join(root, 'src', id.slice(2)) : id, parent, main);
};
global.fetch = async () => { throw new Error('Network forbidden in booking tests'); };
const { validateBooking, PICKUP_LOCATION_TYPES, DELIVERY_LOCATION_TYPES } = require('../src/lib/booking-validation.ts');
const { bookingNotificationLines } = require('../src/lib/booking-notification.ts');
const { POST } = require('../src/app/api/booking/route.ts');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { BookingForm } = require('../src/components/booking-form.tsx');
const valid = {
  quoteNumber: 'TEST-ONLY', totalPrice: '900', depositAmount: '245', pickupDate: '2026-11-05',
  customerName: 'Test Customer', customerEmail: 'test@example.invalid', customerPhone: '555-0100',
  pickupLocationType: 'Auction', pickupContact: 'Test pickup', pickupAddress: '1 Test Street', pickupCity: 'Test City', pickupState: 'CA', pickupZip: '90001', pickupPhone: '555-0101', pickupAlternatePhone: '',
  deliveryLocationType: 'Business', deliveryContact: 'Test delivery', deliveryAddress: '2 Test Street', deliveryCity: 'Test City', deliveryState: 'TX', deliveryZip: '75001', deliveryPhone: '555-0102', deliveryAlternatePhone: '',
  vehicleOne: '2020 Test Motorcycle', vehicleOneColor: 'Blue', vehicleTwo: '', vehicleTwoColor: '', transportType: 'Enclosed', runs: 'Yes', rolls: 'Yes', notes: '', referralSource: '', signature: 'Test Customer', accepted: 'yes',
};
process.env.RESEND_API_KEY = 'test-only-mocked';
process.env.QUOTE_RECIPIENT_EMAIL = 'test@example.invalid';
const post = (body) => POST(new Request('http://localhost/api/booking', { method: 'POST', body: JSON.stringify(body) }));

test('all 12 endpoint combinations survive API validation and persisted notification/dispatch record', async () => {
  for (const pickup of PICKUP_LOCATION_TYPES) for (const delivery of DELIVERY_LOCATION_TYPES) {
    const booking = { ...valid, pickupLocationType: pickup, deliveryLocationType: delivery };
    assert.deepEqual(validateBooking(booking), {});
    const before = messages.length;
    const response = await post(booking);
    assert.equal(response.status, 200);
    assert.equal(messages.length, before + 1);
    const saved = messages.at(-1);
    assert.ok(saved.text.includes(`Pickup location type: ${pickup}`));
    assert.ok(saved.text.includes(`Delivery location type: ${delivery}`));
    assert.ok(saved.text.includes(`Pickup location type → ${pickup}`));
    assert.ok(saved.text.includes(`Delivery location type → ${delivery}`));
    assert.ok(saved.text.includes('Remaining balance: $655.00'));
    assert.ok(saved.text.includes(`Requested pickup: ${valid.pickupDate}`));
    assert.ok(saved.text.includes(`Booking requested pickup / ready date → ${valid.pickupDate}`));
    assert.ok(saved.text.includes('reopen the saved listing independently'));
    assert.equal(saved.replyTo, valid.customerEmail);
  }
});

test('missing, empty, invalid, superseded and non-string types fail before send; Auction never accepted for delivery', async () => {
  const before = messages.length;
  for (const field of ['pickupLocationType', 'deliveryLocationType']) {
    for (const value of [undefined, '', ' ', 'Commercial Business', 'residence', 'Other', null, 1, {}, 'x'.repeat(181), ...(field === 'deliveryLocationType' ? ['Auction'] : [])]) {
      const booking = { ...valid, [field]: value };
      assert.ok(validateBooking(booking)[field]);
      assert.equal((await post(booking)).status, 400);
    }
  }
  assert.equal(messages.length, before);
});

test('historical records without either type stay unknown; unsupported values stay flagged', () => {
  for (const field of ['pickupLocationType', 'deliveryLocationType']) {
    const historical = { ...valid };
    delete historical[field];
    const text = bookingNotificationLines(historical).join('\n');
    const label = field === 'pickupLocationType' ? 'Pickup' : 'Delivery';
    assert.ok(text.includes(`${label} location type: Not provided — confirm with customer before dispatch`));
    assert.ok(!text.includes(`${label} location type: Residence`));
  }
  const old = { ...valid };
  delete old.pickupLocationType; delete old.deliveryLocationType;
  assert.equal(bookingNotificationLines(old).filter(line => line.includes('Not provided — confirm')).length, 4);
  assert.ok(bookingNotificationLines({ ...valid, deliveryLocationType: 'Auction' }).join('\n').includes('Unrecognized (Auction)'));
});

test('rendered booking form has required blank selections, four pickup choices and three delivery choices', () => {
  const html = renderToStaticMarkup(React.createElement(BookingForm));
  for (const [field, choices] of [['pickupLocationType', PICKUP_LOCATION_TYPES], ['deliveryLocationType', DELIVERY_LOCATION_TYPES]]) {
    const select = html.match(new RegExp(`<select[^>]*name="${field}"[^>]*>[\\s\\S]*?</select>`))[0];
    assert.match(select, /required=""/);
    assert.match(select, /<option value="" disabled="" selected="">Select location type<\/option>/);
    assert.equal((select.match(/<option /g) || []).length, choices.length + 1);
    for (const choice of choices) assert.ok(select.includes(`value="${choice}"`));
    if (field === 'deliveryLocationType') assert.ok(!select.includes('Auction'));
  }
  const prepared = renderToStaticMarkup(React.createElement(BookingForm, { prepared: true, initialValues: valid }));
  assert.match(prepared, /value="Auction" selected=""/);
  assert.match(prepared, /value="Business" selected=""/);
  assert.match(prepared, /readOnly=""/);
  assert.ok(html.includes('eProcessing Network'));
});

test('existing validation, honeypot and provider failure behavior remains intact', async () => {
  for (const changes of [{ accepted: '' }, { customerEmail: 'bad' }, { depositAmount: '194' }, { depositAmount: '245.001' }, { depositAmount: '1e2' }, { totalPrice: '0' }, { totalPrice: '900.001' }, { totalPrice: '1e3' }, { transportType: 'Other' }, { pickupAddress: '' }]) {
    assert.equal((await post({ ...valid, ...changes })).status, 400);
  }
  const before = messages.length;
  assert.equal((await post({ website: 'bot' })).status, 200);
  assert.equal(messages.length, before);
  sendError = { message: 'mock failure' };
  assert.equal((await post(valid)).status, 502);
  sendError = null;
});

test('identical booking submissions use a stable idempotency key while changed submissions do not collide', async () => {
  const before = messages.length;
  assert.equal((await post(valid)).status, 200);
  assert.equal((await post(valid)).status, 200);
  const first = messages[before]._options.idempotencyKey;
  const second = messages[before + 1]._options.idempotencyKey;
  assert.match(first, /^booking\/[a-f0-9]{64}$/);
  assert.equal(first, second);
  assert.equal((await post({ ...valid, notes: 'Different booking details' })).status, 200);
  assert.notEqual(messages[before + 2]._options.idempotencyKey, first);
});
