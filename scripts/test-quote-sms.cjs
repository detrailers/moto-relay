/* eslint-disable @typescript-eslint/no-require-imports -- Isolated CommonJS test loader with mocked email provider. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { test } = require('node:test');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 }, fileName: filename,
  }).outputText, filename);
}
const messages = [];
const load = Module._load;
Module._load = function (id, parent, main) {
  if (id === 'resend') return { Resend: class { emails = { send: async (message) => { messages.push(message); return { error: null }; } }; } };
  return load.call(this, id.startsWith('@/') ? path.join(root, 'src', id.slice(2)) : id, parent, main);
};
global.fetch = async () => { throw new Error('Network forbidden in quote tests'); };
const { prepareQuoteSms, validateSmsQuote } = require('../src/lib/quote-sms.ts');
const { validateQuoteSubmission } = require('../src/lib/quote-validation.ts');
const { POST } = require('../src/app/api/quote/route.ts');
const { site } = require('../src/lib/site.ts');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { QuoteForm } = require('../src/components/quote-form.tsx');
const QuotePage = require('../src/app/quote/page.tsx').default;
const { TextQuoteCta } = require('../src/components/text-quote-cta.tsx');
const valid = { pickup: '00501', delivery: '75001-1234', vehicleType: 'Motorcycle', year: '2020', make: 'Harley-Davidson', model: 'Street Glide', runs: 'yes', rolls: 'no', transport: 'both', notes: '', name: '', phone: '', email: '' };
process.env.RESEND_API_KEY = 'test-only-mocked';
process.env.QUOTE_RECIPIENT_EMAIL = 'test@example.invalid';
const post = (body) => POST(new Request('http://localhost/api/quote', { method: 'POST', body: JSON.stringify(body) }));

test('every shipment-required field rejects empty or whitespace input; no SMS link is built', () => {
  for (const field of ['pickup', 'delivery', 'vehicleType', 'year', 'make', 'model', 'runs', 'rolls', 'transport']) {
    for (const value of ['', '   ', '\n\t']) {
      const data = { ...valid, [field]: value };
      assert.ok(validateSmsQuote(data)[field], field);
      assert.equal(prepareQuoteSms(data), null);
    }
  }
});

test('ZIP format, vehicle year and existing choice validation reject malformed values', () => {
  for (const field of ['pickup', 'delivery']) {
    for (const value of ['1234', '123456', '123456789', 'ABCDE', '12345-123', '12345-12345', 'Denton, TX', '12 345', '１２３４５']) {
      assert.ok(validateSmsQuote({ ...valid, [field]: value })[field]);
    }
    for (const value of ['00501', '75001-1234', ' 75001 ']) assert.deepEqual(validateSmsQuote({ ...valid, [field]: value }), {});
  }
  for (const changes of [{ year: '20' }, { year: 'abcd' }, { transport: 'other' }, { runs: 'unknown' }, { rolls: 'unknown' }, { make: 'a'.repeat(201) }, { notes: 'x'.repeat(1001) }]) assert.equal(prepareQuoteSms({ ...valid, ...changes }), null);
});

test('filled SMS links preserve leading ZIP zeroes, trim fields, encode reserved characters and need no contact information', () => {
  const data = { ...valid, pickup: ' 00501 ', year: ' 2020 ', make: ' A&B ', model: ' Model #1 + Special ', notes: ' Tall & wide?\nCall first. ' };
  assert.deepEqual(validateSmsQuote(data), {});
  const { href, body } = prepareQuoteSms(data);
  assert.ok(href.startsWith(`${site.smsHref}?body=`));
  assert.ok(!href.includes('\n'));
  assert.equal(decodeURIComponent(href.split('?body=')[1]), body);
  assert.ok(body.includes('Pickup ZIP: 00501'));
  assert.ok(body.includes('Delivery ZIP: 75001-1234'));
  assert.ok(body.includes('Year/Make/Model: 2020 A&B Model #1 + Special'));
  assert.ok(body.includes('Runs: yes\nRolls: no'));
  assert.ok(body.includes('Open / Enclosed / Both: both'));
  assert.ok(body.includes('Notes: Tall & wide?\nCall first.'));
  assert.ok(!body.includes('Email:'));
  assert.ok(!prepareQuoteSms(valid).body.includes('Notes:'));
});

test('text page starts with required ZIP fields and no SMS link; default email page retains its flow', async () => {
  const text = renderToStaticMarkup(await QuotePage({ searchParams: Promise.resolve({ mode: 'text' }) }));
  assert.ok(text.includes('Pickup ZIP code (required)'));
  assert.ok(text.includes('Delivery ZIP code (required)'));
  assert.ok(text.includes('Review text message'));
  assert.ok(!text.includes('href="sms:'));
  assert.ok(!text.includes('Continue for My Quote'));
  const email = renderToStaticMarkup(React.createElement(QuoteForm));
  assert.ok(email.includes('ZIP code or city, state'));
  assert.ok(email.includes('Continue for My Quote'));
  assert.ok(!email.includes('Review text message'));
  const fallback = renderToStaticMarkup(await QuotePage({ searchParams: Promise.resolve({ mode: 'unknown' }) }));
  assert.ok(fallback.includes('Continue for My Quote'));
});

test('all text quote entry points route through validation; unrelated call/email contact links remain', () => {
  const home = fs.readFileSync(path.join(root, 'src/app/page.tsx'), 'utf8');
  assert.equal((home.match(/href=\{site.textQuoteHref\}/g) || []).length, 2);
  assert.ok(!home.includes('site.smsHref'));
  const cta = renderToStaticMarkup(React.createElement(TextQuoteCta));
  assert.ok(cta.includes(`href="${site.textQuoteHref}"`));
  assert.ok(!cta.includes('href="sms:'));
  assert.ok(cta.includes(`href="${site.phoneHref}"`));
  assert.ok(cta.includes(`href="${site.emailHref}"`));
});

test('existing email quote API accepts city/state plus contacts and still rejects missing shipment/contact fields', async () => {
  const data = { ...valid, pickup: 'Denton, TX', delivery: 'Phoenix, AZ', name: 'Test Customer', phone: '555-0100', email: 'test@example.invalid' };
  assert.deepEqual(validateQuoteSubmission(data), {});
  assert.equal((await post(data)).status, 200);
  assert.equal(messages.length, 1);
  assert.equal(messages[0].replyTo, data.email);
  assert.ok(messages[0].text.includes('Pickup: Denton, TX'));
  for (const field of ['pickup', 'delivery', 'year', 'make', 'model', 'name', 'phone', 'email']) {
    assert.equal((await post({ ...data, [field]: '  ' })).status, 400);
  }
  assert.equal(messages.length, 1);
});
