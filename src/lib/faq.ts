import type { FaqItem } from "@/components/faq-accordion";

// Owner-approved answers. Keep to established service facts only — do not add
// price ranges, transit-time promises, insurance limits/deductibles, or claims
// about owning carriers, trucks, or trailers.
export const FAQS: FaqItem[] = [
  {
    question: "How much does it cost to ship a motorcycle?",
    answer:
      "There is no dependable one-price-fits-all answer. Moto Relay quotes the actual pickup and delivery route, motorcycle, transport type, condition, timing, access, and current carrier availability instead of using a generic national average.",
  },
  {
    question: "What information does Moto Relay need for an accurate quote?",
    answer:
      "Provide the pickup and delivery ZIP codes or cities, year, make and model, whether the vehicle runs and rolls, your open or enclosed preference, preferred timing, and any dimensions, modifications, or access limitations that could affect loading.",
  },
  {
    question: "How long does motorcycle shipping take?",
    answer:
      "Timing depends on the actual route, transport option, scheduling needs, and carrier availability. Moto Relay provides an estimated pickup and delivery window for the specific shipment instead of publishing a general timeframe that may not apply.",
  },
  {
    question: "Does Moto Relay provide door-to-door shipping?",
    answer:
      "Yes. Pickup and delivery are arranged as close to the requested addresses as the carrier can safely and legally access. Narrow streets, low branches, tight turns, or local restrictions may require a nearby accessible meeting point.",
  },
  {
    question: "Does Moto Relay offer depot-to-depot shipping?",
    answer:
      "No. Moto Relay provides door-to-door transport and does not offer depot-to-depot shipping. Customers do not need to take the vehicle to one storage terminal and retrieve it from another.",
  },
  {
    question: "Does Moto Relay crate motorcycles or powersports vehicles?",
    answer:
      "No. Moto Relay does not crate vehicles or use a depot-and-crate freight process involving forklift handling.",
  },
  {
    question: "What is the difference between open and enclosed transport?",
    answer:
      "Open transport carries the vehicle on an open trailer and is practical for many shipments. Enclosed transport shields it from weather and road debris. Moto Relay can quote open, enclosed, or both when the vehicle's dimensions and suitable equipment allow.",
  },
  {
    question: "Can Moto Relay ship a motorcycle that does not run?",
    answer:
      "Yes. Moto Relay accepts non-running motorcycles when they still roll freely and can be moved for loading. Disclose whether the motorcycle runs and rolls when requesting the quote.",
  },
  {
    question: "What if the motorcycle or powersports vehicle does not roll?",
    answer:
      "Vehicles that cannot be pushed or rolled are not currently accepted. Tell Moto Relay if steering, brakes, locked wheels, flat tires, or another condition could prevent the vehicle from rolling.",
  },
  {
    question: "Can Moto Relay ship ATVs, UTVs, side-by-sides, and trikes?",
    answer:
      "Yes. Moto Relay arranges transport for motorcycles, three-wheel and four-wheel ATVs, UTVs and side-by-sides, factory trikes, and motorcycle trike conversions across the lower 48 United States.",
  },
  {
    question: "Why do vehicle dimensions and modifications matter?",
    answer:
      "Length, width, height, weight, ground clearance, roofs, cabs, racks, oversized tires, conversion kits, and other additions can affect loading, securement, trailer clearance, and equipment availability. Provide finished dimensions as the vehicle will be shipped.",
  },
  {
    question: "How should I prepare my vehicle for pickup?",
    answer:
      "Make the vehicle accessible, remove personal property, secure or remove loose accessories, provide keys when it runs, photograph its condition, and disclose any special starting, steering, braking, or loading instructions.",
  },
  {
    question: "When is the deposit due?",
    answer:
      "A deposit is due once the shipment has been dispatched, not before. No payment is required merely to request or receive a quote.",
  },
  {
    question: "Is my vehicle insured during transportation?",
    answer:
      "Shipments are transported by DOT-authorized carriers in good standing, and full-coverage insurance is included. Specific coverage details are provided directly as part of arranging the shipment.",
  },
  {
    question: "Does Moto Relay ship outside the lower 48 states?",
    answer:
      "Moto Relay currently ships exclusively within the lower 48 United States. International, Alaska, and Hawaii shipping are not available at this time.",
  },
];
