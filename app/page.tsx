import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foster’s Car Alert — August 6, 2026",
  description: "Eight dealer cars at $6,000 or less within about an hour of Leverett, Massachusetts.",
};

type Car = {
  rank: number;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  miles: number;
  dealer: string;
  town: string;
  rating: string;
  image?: string;
  url: string;
  verdict: string;
  note: string;
  tag: string;
};

const cars: Car[] = [
  {
    rank: 1, year: 2010, make: "Nissan", model: "Versa", trim: "1.8 S Hatchback · 4-speed automatic",
    price: 2995, miles: 168167, dealer: "Arrow Auto Sales", town: "Gill, MA", rating: "Google 4.7 ★ · 123 reviews",
    url: "https://www.carsforsale.com/used-car-dealer/arrow-auto-sales-gill-ma-d737564/inventory/details/128017936",
    verdict: "Best value if it passes inspection",
    note: "The conventional 4-speed automatic avoids the CVT concern associated with many later Versas, and the price leaves room for catch-up maintenance. Check front springs, wheel bearings, engine mounts, underbody rust and recall completion; confirm the advertised stability control by VIN because listing feature feeds can be wrong.",
    tag: "Best deal",
  },
  {
    rank: 2, year: 2006, make: "Honda", model: "Civic", trim: "LX",
    price: 4450, miles: 162000, dealer: "The Car Place", town: "Somers, CT", rating: "Google 4.0 ★ · 73 reviews",
    image: "https://platform.cstatic-images.com/in/v2/bc10d8b6-24fb-52bb-b805-adb51fcdb61e/6099e753-f900-4fe1-a707-ec40b0046bab/f_8ehQLCsdIJVvb6IiNNkY33DIM.jpg",
    url: "https://www.cars.com/vehicledetail/1d4fd32d-421c-420e-a50f-ecf367531dc0/",
    verdict: "Strong first-car candidate, with one big caveat",
    note: "Civics of this era are economical and usually long-lived, but some 2006–09 cars developed cracked engine blocks. A cold-start test, cooling-system check and independent inspection are essential; also verify whether this specific car has electronic stability control before treating it as a safety plus.",
    tag: "Reliable pick",
  },
  {
    rank: 3, year: 2011, make: "Kia", model: "Soul", trim: "+",
    price: 5950, miles: 115000, dealer: "The Car Place", town: "Somers, CT", rating: "Google 4.0 ★ · 73 reviews",
    image: "https://platform.cstatic-images.com/large/in/v2/bc10d8b6-24fb-52bb-b805-adb51fcdb61e/73a0fac7-c026-47ac-aa10-462408c45171/-7zPiuMVQ-yguu_zO6V5w3V4OOc.jpg",
    url: "https://www.cars.com/vehicledetail/4c0e7bf3-7ac2-4cf6-88a1-d62301d679a5/",
    verdict: "Low mileage for this price bracket",
    note: "The boxy Soul is practical and easy to see out of, and 115,000 miles is unusually attractive here. Check recall completion, oil consumption and suspension noise, and get an insurance quote before buying—some carriers restrict older Kias because of theft risk.",
    tag: "Low miles",
  },
  {
    rank: 4, year: 2014, make: "Toyota", model: "Camry", trim: "LE",
    price: 5650, miles: 227000, dealer: "The Car Place", town: "Somers, CT", rating: "Google 4.0 ★ · 73 reviews",
    image: "https://platform.cstatic-images.com/xxlarge/in/v2/bc10d8b6-24fb-52bb-b805-adb51fcdb61e/bb2045c1-e279-4caa-9981-9159d8215c4e/oFlna3wVGvH5tWyCVbYQvyovjwM.jpg",
    url: "https://www.cars.com/vehicledetail/fa083620-bf75-4bae-9c45-5ff1ecd48679/",
    verdict: "Good model, difficult history",
    note: "This Camry generation has a strong reliability reputation and modern stability control, but 227,000 miles and reported accident/damage make service records unusually important. Consider it only after a body/structure check and a thorough pre-purchase inspection.",
    tag: "Toyota durability",
  },
  {
    rank: 5, year: 2006, make: "Honda", model: "Accord", trim: "EX-L V6",
    price: 4900, miles: 188931, dealer: "Adam Auto Sales", town: "Holyoke, MA", rating: "Google rating not verified",
    image: "https://platform.cstatic-images.com/large/in/v2/c2de23af-582b-4c4b-9804-387812627090/ef827d97-790e-4642-976c-554afc638fb3/_eBpPvYypvbBb3EFWqoWx1pobQ4.jpg",
    url: "https://www.cars.com/vehicledetail/ffaf1653-dbb8-4a02-b696-8d589023009a/",
    verdict: "Comfortable, but maintenance-sensitive",
    note: "The Accord is a sound platform, though the V6 adds fuel cost and a timing-belt service that must be documented. At nearly 189,000 miles, transmission behavior, rust and the timing-belt/water-pump history decide whether this is a bargain or a looming bill.",
    tag: "Service records key",
  },
  {
    rank: 6, year: 2009, make: "Ford", model: "Fusion", trim: "SE",
    price: 2995, miles: 208550, dealer: "Geneva Auto Sales", town: "West Springfield, MA", rating: "Google rating not verified",
    url: "https://www.cars.com/vehicledetail/b42f532e-267d-4e60-85ac-9962eec90ba6/",
    verdict: "Cheap enough to inspect, too worn to assume",
    note: "First-generation Fusions are generally respectable budget cars and parts are widely available. This one has more than 208,000 miles, so rust, suspension wear, leaks and transmission condition matter more than the badge; proceed only with a clean inspection and maintenance trail.",
    tag: "Budget gamble",
  },
  {
    rank: 7, year: 2005, make: "Acura", model: "RL", trim: "3.5 SH-AWD",
    price: 4950, miles: 170000, dealer: "The Car Place", town: "Somers, CT", rating: "Google 4.0 ★ · 73 reviews",
    image: "https://platform.cstatic-images.com/large/in/v2/bc10d8b6-24fb-52bb-b805-adb51fcdb61e/d241feb6-d427-4a7d-bf95-22ad8dc6cad5/TRHe48VFCGZunq1UfxJiYXE_n2c.jpg",
    url: "https://www.cars.com/vehicledetail/cfb5b633-898b-4065-810e-8691dcd349ee/",
    verdict: "Capable car, costly first-car fit",
    note: "Owner reviews are unusually positive for longevity, and AWD is useful in winter. Still, premium fuel, timing-belt service, complex AWD/electronics and potentially higher teen-driver insurance make it a less sensible first car than the cheaper four-cylinders above.",
    tag: "Luxury costs",
  },
  {
    rank: 8, year: 2014, make: "Toyota", model: "Prius v", trim: "Three",
    price: 5394, miles: 296243, dealer: "Athol Motors", town: "Athol, MA", rating: "Google 2.8 ★ · 10 reviews",
    image: "https://platform.cstatic-images.com/large/in/v2/9a9cf7aa-d5dc-4a5f-94eb-f58319c987ee/faaffa04-4745-4e5d-80d3-31a29779f142/8edeBWZJKKfeOsKrsQ1TZMi5Vw8.jpg",
    url: "https://www.cars.com/vehicledetail/9319d8ed-34fb-4327-b85e-90579f548d95/",
    verdict: "Too many miles for the asking price",
    note: "The Prius v is efficient and practical, but nearly 300,000 miles puts the hybrid battery, EGR/head-gasket system and general wear firmly in risk territory. The dealer’s low Google rating also weighs against it; this belongs at the bottom unless inspection and records are exceptional.",
    tag: "High risk",
  },
];

const checked = [
  "Affordable Used Cars", "Reliance Auto", "Auto Sales Center Inc", "Matt’s Auto Mall",
  "Depot Auto Sales", "Shelby Motor Cars", "Cottage Street Used Car Sales", "Ken’s Auto Sales",
  "AJ’s Auto Land", "Green River Auto", "Thrifty Springfield & Westfield", "CT Car Co",
  "Enfield Street Auto Sales", "Gale Toyota",
];

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-US");

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav><span className="wordmark">FOSTER’S</span><span className="date">THURSDAY · AUG 6, 2026</span></nav>
        <div className="hero-copy">
          <p className="eyebrow">DAILY CAR ALERT · LEVERETT, MASSACHUSETTS</p>
          <h1>Eight cars worth<br/><em>a closer look.</em></h1>
          <p className="dek">Dealer listings at $6,000 or less, within about an hour of home. Ranked for a new driver—with reliability, mileage, price and dealer reputation all in the mix.</p>
        </div>
        <div className="stats" aria-label="Search summary">
          <div><strong>8</strong><span>candidates</span></div>
          <div><strong>$4,661</strong><span>median price</span></div>
          <div><strong>60 min</strong><span>search radius</span></div>
        </div>
      </header>

      <section className="method">
        <span>How they’re ranked</span>
        <p>This is a judgment call, not a formula: price versus age and mileage, the model’s reliability record, likely repair exposure and dealer reputation. Availability can change at any moment—call first.</p>
      </section>

      <section className="list" aria-label="Ranked car listings">
        {cars.map((car) => (
          <article className={`car-card ${car.rank === 1 ? "winner" : ""}`} key={car.rank}>
            <div className="photo-wrap">
              {car.image ? <img src={car.image} alt={`Dealer photo of ${car.year} ${car.make} ${car.model}`} /> : (
                <div className="photo-missing"><span>Photo unavailable</span><small>The listing has vehicle photos, but the source blocked retrieval.</small></div>
              )}
              <span className="rank">#{car.rank}</span>
              <span className="tag">{car.tag}</span>
            </div>
            <div className="car-copy">
              <div className="title-row">
                <div><p className="make">{car.year} · {car.make}</p><h2>{car.model}</h2><p className="trim">{car.trim}</p></div>
                <div className="price"><strong>{money.format(car.price)}</strong><span>{number.format(car.miles)} miles</span></div>
              </div>
              <div className="dealer"><span>{car.dealer} · {car.town}</span><span>{car.rating}</span></div>
              <div className="review"><h3>{car.verdict}</h3><p>{car.note}</p></div>
              <a href={car.url} target="_blank" rel="noreferrer">View original listing <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="coverage">
        <p className="eyebrow">SEARCH COVERAGE</p>
        <h2>Checked, with no other qualifying inventory verified today.</h2>
        <div className="dealer-grid">{checked.map((name) => <span key={name}>{name}</span>)}</div>
      </section>

      <section className="checklist">
        <div><p className="eyebrow">BEFORE MONEY CHANGES HANDS</p><h2>Three non-negotiables.</h2></div>
        <ol><li><b>Independent inspection</b><span>Have a mechanic—not the seller—check structure, rust, leaks, brakes and tires.</span></li><li><b>VIN history + recalls</b><span>Confirm title, crashes and open safety recalls using the actual VIN.</span></li><li><b>Insurance quote</b><span>Price coverage for a 16-year-old before putting down a deposit.</span></li></ol>
      </section>

      <footer>
        <p>Fresh search completed August 6, 2026. Listings may repeat on future days while they remain available.</p>
        <p>Listing details and dealer ratings were verified where accessible; “not verified” means exactly that. Always confirm price and availability directly.</p>
      </footer>
    </main>
  );
}
