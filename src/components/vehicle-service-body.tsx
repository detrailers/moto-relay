import { Button } from "@/components/button";

// Shared body content for the four vehicle-type service pages. The four
// pages differ only in vehicle wording, so this keeps that content in one
// place instead of four near-duplicate files.
export function VehicleServiceBody({
  vehicleLabel,
  vehiclePlural,
}: {
  /** Mid-sentence singular form, already cased correctly (e.g. "motorcycle", "ATV"). */
  vehicleLabel: string;
  vehiclePlural: string;
}) {
  return (
    <>
      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What this service covers
        </h2>
        <p>
          Moto Relay arranges door-to-door transport for {vehiclePlural} across the lower 48 United States. Both
          open and enclosed transport are available, and we accept running and non-running vehicles, as long as
          the vehicle rolls.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Open vs. enclosed transport
        </h2>
        <p>
          Open transport carries your {vehicleLabel} on an open trailer alongside other vehicles — a
          widely used, practical option. Enclosed transport fully encloses your vehicle, shielding it from road
          debris and weather during the trip. Let us know your preference when you request a quote, or ask us to
          price both.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          What we need for a quote
        </h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Pickup and delivery locations</li>
          <li>Year, make, and model</li>
          <li>Whether the vehicle runs</li>
          <li>Whether the vehicle rolls</li>
          <li>Your open, enclosed, or both preference</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Running and rolling requirements
        </h2>
        <p>
          Non-running vehicles are accepted as long as they roll — meaning the wheels turn freely and the vehicle
          can be pushed. Non-rolling vehicles currently cannot be accepted for transport.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
          Preparing for pickup and delivery
        </h2>
        <p>
          Have your {vehicleLabel} accessible for the carrier at pickup, with keys available if it
          runs. Secure or remove loose accessories, and note any existing damage before pickup. Confirm a delivery
          contact and address so your vehicle can be handed off without delay.
        </p>
      </section>

      <div className="pt-2">
        <Button href="/quote">Request a Quote</Button>
      </div>
    </>
  );
}
