import type { FaqItem } from "@/components/faq-accordion";

// Owner-approved answers. Keep to the approved facts only — do not add
// price ranges, transit-time promises, insurance limits/deductibles, or
// claims about owning carriers/trucks/trailers.
export const FAQS: FaqItem[] = [
  {
    question: "How much does it cost to ship a motorcycle?",
    answer:
      "Cost depends on your pickup and delivery locations, the vehicle type, whether you choose open or enclosed transport, the vehicle's condition, and current carrier availability. Because these factors vary by shipment, we don't publish flat rates — request a quote and we'll send you accurate pricing based on your specific details.",
  },
  {
    question: "How long does motorcycle shipping take?",
    answer:
      "Delivery timing depends on your route, the transport option you choose, and carrier availability. We'll provide an estimated pickup and delivery window directly in your quote response rather than a general timeframe that may not apply to your shipment.",
  },
  {
    question: "What's the difference between open and enclosed transport?",
    answer:
      "Open transport carries your vehicle on an open trailer alongside other vehicles — a widely used, practical option. Enclosed transport fully encloses your vehicle, shielding it from road debris and weather. Both are available; tell us your preference when you request a quote, or ask us to price both.",
  },
  {
    question: "Can you ship a motorcycle that doesn't run?",
    answer:
      "Yes. We accept non-running vehicles as long as they roll — meaning the wheels turn freely and it can be pushed. Let us know your vehicle's condition when you request a quote so it can be loaded safely.",
  },
  {
    question: "What if the motorcycle doesn't roll?",
    answer:
      "Non-rolling vehicles — ones that cannot be pushed or rolled — currently cannot be accepted for transport. If you're unsure whether your vehicle qualifies, contact us and we can help you figure it out.",
  },
  {
    question: "When do I pay my deposit?",
    answer:
      "A deposit is due once your shipment has been dispatched — not before. You won't be asked for payment just to request or receive a quote.",
  },
  {
    question: "Is my motorcycle insured during transportation?",
    answer:
      "Yes. Shipments are transported by DOT-authorized carriers in good standing, and full-coverage insurance is included. Specific coverage details are provided directly as part of arranging your shipment.",
  },
  {
    question: "Do you ship outside the lower 48 states?",
    answer:
      "We currently ship exclusively within the lower 48 United States. International shipping is not available at this time.",
  },
];
