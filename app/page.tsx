import type { Metadata } from "next";
import dealerInventory from "../data/inventory.json";
import facebookInventory from "../data/facebook-inventory.json";

export const metadata: Metadata = {
  title: "Dealer and Facebook Listings for Foster’s Car Search — September 6, 2026",
  description: "Separately ranked dealer and Facebook Marketplace cars at $5,000 or less near Shutesbury and Amherst, Massachusetts.",
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-US");
type DealerCar = (typeof dealerInventory.active)[number];
type FacebookCar = (typeof facebookInventory.active)[number];

function CarCard({ car, kind }: { car: DealerCar | FacebookCar; kind: "dealer" | "facebook" }) {
  const dealerCar = kind === "dealer" ? (car as DealerCar) : null;
  const facebookCar = kind === "facebook" ? (car as FacebookCar) : null;
  const identity = dealerCar ? `${dealerCar.dealer} · ${dealerCar.town}` : `${facebookCar!.source} · ${facebookCar!.town}`;
  const secondary = dealerCar ? dealerCar.rating : "Private party";

  return (
    <article className={`car-card source-${kind} ${car.rank === 1 ? "winner" : ""}`}>
      <div className="photo-wrap">
        <img src={car.image} alt={`Exact ${car.year} ${car.make} ${car.model} from this listing`} />
        <span className="rank">#{car.rank}</span>
        <span className="source-badge">{kind === "dealer" ? "Dealer car" : "Facebook · Private party"}</span>
        <span className="tag">{car.tag}</span>
      </div>
      <div className="car-copy">
        <div className="title-row">
          <div>
            <p className="make">{car.year} · {car.make}</p>
            <h3>{car.model}</h3>
            <p className="trim">{car.trim}</p>
          </div>
          <div className="price"><strong>{money.format(car.price)}</strong><span>{number.format(car.miles)} miles</span></div>
        </div>
        <div className="dealer"><span>{identity}</span><span>{secondary}</span></div>
        <div className="assessments">
          <div>
            <span>Reliability</span>
            <strong className={`level ${car.reliabilityLevel.toLowerCase().replace(" ", "-")}`}>{car.reliabilityLevel}</strong>
            <p>{car.reliability}</p>
          </div>
          <div>
            <span>Safety</span>
            <strong className={`level ${car.safetyLevel.toLowerCase().replace(" ", "-")}`}>{car.safetyLevel}</strong>
            <p>{car.safety}</p>
            <a className="evidence" href={car.safetySource} target="_blank" rel="noreferrer">Safety evidence ↗</a>
          </div>
        </div>
        <div className="review"><h4>{car.verdict}</h4><p>{car.note}</p></div>
        <div className="actions">
          <a href={car.url} target="_blank" rel="noreferrer">View original listing ↗</a>
          <span>{car.vin ? `VIN ${car.vin}` : "VIN not shown — verify before purchase"}</span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const dealers = [...dealerInventory.active].sort((a, b) => a.rank - b.rank);
  const facebook = [...facebookInventory.active].sort((a, b) => a.rank - b.rank);

  return (
    <main>
      <header className="hero">
        <nav><span className="wordmark">FOSTER’S</span><span className="date">SUNDAY · SEP 6, 2026</span></nav>
        <div className="hero-copy">
          <p className="eyebrow">DAILY CAR ALERT · SHUTESBURY / AMHERST, MASSACHUSETTS</p>
          <h1>Dealer and Facebook Listings<br /><em>for Foster’s Car Search</em></h1>
          <p className="dek">Dealer and Facebook Marketplace cars at $5,000 or less, within roughly an hour of Shutesbury and Amherst. Reliability and safety are co-equal for a 16-year-old driver; price and mileage come next.</p>
        </div>
        <div className="stats">
          <div><strong>{dealers.length}</strong><span>dealer cars</span></div>
          <div><strong>{facebook.length}</strong><span>private-party cars</span></div>
          <div><strong>$5k</strong><span>firm ceiling</span></div>
          <div><strong>60 min</strong><span>rough drive time</span></div>
        </div>
      </header>

      <section className="method">
        <span>How they’re ranked</span>
        <p>Each source has its own ranking beginning at #1. Model-specific reliability and verified crash protection lead; mileage, repair exposure, price, history and seller transparency break closer calls. Every car still needs records, a VIN recall check, title verification and an independent inspection.</p>
      </section>

      <section className="ranking-section dealer-section" aria-labelledby="dealer-heading">
        <div className="source-header dealer-header">
          <div className="source-header-inner">
            <div><p className="eyebrow">DEALERSHIPS · INDEPENDENT RANKING · UP TO 12</p><h2 id="dealer-heading">Dealer Cars</h2></div>
            <p>{dealers.length} live, individually verified dealership listings. Every card in this section is marked “Dealer car.” Rank #1 is this group’s best current deal.</p>
          </div>
        </div>
        <div className="list" aria-label="Ranked dealer cars">{dealers.map((car) => <CarCard key={car.vin} car={car} kind="dealer" />)}</div>
      </section>

      <section className="ranking-section facebook-section" aria-labelledby="facebook-heading">
        <div className="source-header facebook-header">
          <div className="source-header-inner">
            <div><p className="eyebrow">FACEBOOK MARKETPLACE · INDEPENDENT RANKING · UP TO 8</p><h2 id="facebook-heading">Facebook Marketplace — Private Party</h2></div>
            <p>{facebook.length} live private-party listings survived individual-page verification. Every card in this section is marked “Facebook · Private party.” Rank #1 is this group’s best current deal.</p>
          </div>
        </div>
        <div className="private-caution"><strong>Private-party safeguards</strong><span>Confirm the seller’s identity matches the title, verify there is no lien, meet in a safe public place, run the VIN through recall and history checks, and arrange an independent inspection before payment.</span></div>
        <div className="list" aria-label="Ranked Facebook Marketplace private-party cars">{facebook.map((car) => <CarCard key={car.listingId} car={car} kind="facebook" />)}</div>
      </section>

      <section className="coverage">
        <p className="eyebrow">VERIFICATION NOTES</p>
        <h2>Fewer cars is better than false confidence.</h2>
        <p className="coverage-note">This run reverified every active listing and added only leads with live individual pages, exact-car photos and enough information to assess. Two Facebook candidates with better records or seller transparency displaced two still-live lower-ranked fallbacks; an ABS-warning car, a misclassified dealer listing, a high-complexity hybrid and weak or stale leads were excluded. No stock or substitute images were used.</p>
      </section>

      <section className="checklist">
        <div><p className="eyebrow">BEFORE MONEY CHANGES HANDS</p><h2>Four non-negotiables.</h2></div>
        <ol>
          <li><b>Independent inspection</b><span>Have a mechanic—not the seller—check structure, rust, leaks, brakes and tires.</span></li>
          <li><b>VIN history + recalls</b><span>Confirm title, accidents, mileage and open safety campaigns using the actual VIN.</span></li>
          <li><b>Written price</b><span>Get the full out-the-door dealer price, or a signed private-party bill of sale.</span></li>
          <li><b>Insurance quote</b><span>Price coverage for a 16-year-old before putting down a deposit.</span></li>
        </ol>
      </section>

      <footer><p>Fresh search completed September 6, 2026. Dealer and Facebook inventory and history are stored separately.</p><p>Availability changes quickly. Verify the listing, VIN, title and condition again before traveling.</p></footer>
    </main>
  );
}
