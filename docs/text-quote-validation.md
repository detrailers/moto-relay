# Required details before quote SMS

All three existing text-quote entry points (homepage hero, homepage lower
“Text Us” button, and `/quote` text CTA) now navigate to `/quote?mode=text`.
There is no blank quote-template link. Calls and direct email links are unchanged.

Text mode reuses the quote form's shipment fields and shared validation. Required:

- Pickup ZIP and delivery ZIP: five digits or ZIP+4 (`12345-6789`).
  Surrounding whitespace is trimmed and leading zeroes preserved. This validates
  format, not ZIP existence or service coverage.
- Year: existing four-digit 19xx/20xx rule.
- Make and model: nonblank after trimming, existing 200-character limits.
- Vehicle type: Motorcycle, ATV, UTV, or Trike.
- Runs and rolls: explicit yes/no selections for each.
- Transport preference: open, enclosed, or both.

Notes are optional, with the existing 1,000-character limit. Name, phone, and
email are not requested in text mode. No request is sent to `/api/quote`.

“Review text message” validates all shipment fields and creates a populated
preview. Only then is an `sms:` link rendered. “Edit details” removes that link
until the edited form is validated again. “Open text message” hands the encoded
message to the device's messaging app; the customer still reviews and sends it.
The screen never claims a message has been sent. The existing SMS recipient and
`?body=` format are retained. Contact-click analytics runs on the actual SMS link,
not on the initial website navigation; it is not proof of message delivery.

The regular `/quote` page and homepage form remain in email mode. They still
accept ZIP or city/state and require name, phone, and email in step two. The quote
API, email delivery, pricing, payment behavior, and booking location-type change
are not modified by this SMS change. `/quote` is now rendered dynamically to read
its mode query; the canonical remains `/quote`.

## Verification

- `npm run test:quote-sms`: six passing test groups cover every blank/whitespace
  shipment field, malformed ZIPs/year/choices, trimmed and encoded SMS bodies,
  leading zeroes, optional notes, no email requirement, all three entry points,
  rendered text/email modes, and the actual email API with Resend mocked.
- Existing `npm run test:booking`: all five test groups pass.
- ESLint, TypeScript and production Webpack build pass.
- Local production app tested in Chrome at 390×844: empty form shows errors,
  complete synthetic details generate the matching SMS link and preview, editing
  make to whitespace blocks the link again, homepage/quote CTA links use text
  mode, and the email form accepts city/state and advances to contact details.
- No SMS link was opened, no real form was submitted, and no email was sent.
  Native iOS/Android composer behavior and actual delivery are not claimed as
  tested; verify the prepared link on target phones without sending before release.

Once the device composer is open, the website cannot prevent the customer from
editing or removing text. These checks enforce completeness before handoff.

## Release

Keep this as a separate commit from booking location types. Deployment remains
pending explicit authorization. Integrate the desired commits, rerun checks with
locked dependencies, review the mobile composer handoff, and deploy through the
normal release workflow only after approval. No changes to quote automation,
its ledger/schedule/policy/ownership/sending behavior, or existing Central listings.
