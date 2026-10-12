# Booking location types and Central Dispatch QA

## Source and persistence

`/book-shipment` renders `src/components/booking-form.tsx`; its JSON POST goes to
`/api/booking`. Both selections start blank and are required independently.
The API accepts only the endpoint's exact choices after trimming surrounding
whitespace. Pricing, prepared-link values, payment links, contact fields,
terms, attribution, and email delivery behavior are unchanged.

This repository has no booking database, historical booking editor, or Central
Dispatch integration/export. Its existing durable booking record is the
notification delivered through Resend to `QUOTE_RECIPIENT_EMAIL`. Both new
fields are included in that record and repeated in its dispatch checklist.
A successful response means the mail provider accepted the notification; it
is not independent confirmation of mailbox delivery or a saved Central load.
No storage migration or historical backfill is performed.

## Mapping checklist

| Booking field | Customer choice | Central field to verify | Required category |
| --- | --- | --- | --- |
| `pickupLocationType` | Residence | Pickup location type | Residence, if offered exactly |
| `pickupLocationType` | Dealership | Pickup location type | Dealership, if offered exactly |
| `pickupLocationType` | Business | Pickup location type | Business, if offered exactly |
| `pickupLocationType` | Auction | Pickup location type | Auction, if offered exactly |
| `deliveryLocationType` | Residence | Delivery location type | Residence, if offered exactly |
| `deliveryLocationType` | Dealership | Delivery location type | Dealership, if offered exactly |
| `deliveryLocationType` | Business | Delivery location type | Business, if offered exactly |
| `pickupDate` | Latest customer-confirmed booking date | Ready / available date | Same calendar date |

Central's current category menu was **not verified** during implementation;
no Central Dispatch tab was open in the available Chrome session. These rows
are requested mappings, not a claim that Central offers these labels. If
Central uses another category (for example “Commercial Business” instead of
“Business”), record the exact available labels and report the mismatch for
resolution. Do not silently substitute a category or infer it from an address.
Delivery never offers Auction, and the API rejects it even if forged.

## Before posting an authorized load

1. Read the latest booking record and customer-confirmed updates; identify the
   quote/order and timestamp. Do not rely on an older quote, form link, or listing.
2. Verify both saved location types against that record. For old records with
   either field absent/blank, contact the customer through the authorized workflow
   and record the answer before proceeding. Never assume Residence. Unsupported
   values are flagged as unrecognized, including delivery Auction or the earlier
   proposed “Commercial Business” label.
3. Verify the latest ready date with the booking; compare the actual calendar
   date with Central's ready/available date, avoiding timezone date shifts.
4. Compare the two location types to Central's actual menu. Resolve any mismatch
   before saving/posting. Preserve all existing shipment and payment details.

## Independently verify after saving

Reopen the saved listing from Central's listing view or a fresh view; do not use
only the still-open edit form or a success toast as evidence. Read both persisted
location types and the ready date back from that saved record. Compare them to
the latest booking. Record:

- Booking quote/order and source timestamp/version.
- Central listing ID and URL.
- Expected and saved pickup type, delivery type, and ready date.
- Verification time and verifier; pass/fail and any mismatched labels.

Mark dispatch QA complete only after all three saved values match. If a saved
value is missing or different, stop and report it; corrections require the
normal authorization for that listing. This code change does not authorize any
live posting, modification of Bob's listing, or automation changes.

## Local checks and deployment

Run `npm run test:booking`, `npm run lint`, and `npm run build` with the locked
dependencies installed. The test harness loads the real validator, route,
notification builder and server-rendered form. Resend is replaced before loading
the route and network fetch is blocked; no forms or emails are sent externally.
Tests cover every valid pair, forbidden/missing values, old records, required
blank controls, prepared values, pricing/terms regressions, and provider failure.

After authorization, integrate this change into the release repository, run the
checks, and use its normal deployment process. Confirm the deployed form's
visible choices without submitting a real customer booking. Production mailbox
receipt and Central saved-field verification remain operational checks for the
next authorized real booking/load; local mocked tests do not claim either one.
