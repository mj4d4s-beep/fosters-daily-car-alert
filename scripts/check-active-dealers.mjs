import fs from "node:fs/promises";

const inventory = JSON.parse(await fs.readFile(new URL("../data/inventory.json", import.meta.url), "utf8"));

const strip = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;|&#160;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/\s+/g, " ")
  .trim();

for (const car of inventory.active) {
  try {
    const response = await fetch(car.url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0" } });
    const html = await response.text();
    const text = strip(html);
    const normalized = text.toLowerCase();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? null;
    const available = !/(sold|no longer available|vehicle unavailable|vehicle you are looking for is not available|404 not found|page not found)/i.test(`${title} ${text}`);
    const price = html.match(/itemprop=['"]price['"][^>]*content=['"]([0-9,]+)['"]/i)?.[1]
      ?? html.match(/content=['"]([0-9,]+)['"][^>]*itemprop=['"]price['"]/i)?.[1]
      ?? text.match(/\$\s?([0-9]{1,3}(?:,[0-9]{3})+)/)?.[1]
      ?? null;
    const miles = text.match(/([0-9]{2,3},[0-9]{3})\s*(?:miles|mi\b)/i)?.[1] ?? null;
    console.log(JSON.stringify({ rank: car.rank, car: `${car.year} ${car.make} ${car.model}`, status: response.status, finalUrl: response.url, available, price, miles, title, mentions: normalized.includes(String(car.year)) && normalized.includes(car.make.toLowerCase()) }));
  } catch (error) {
    console.log(JSON.stringify({ rank: car.rank, car: `${car.year} ${car.make} ${car.model}`, error: String(error) }));
  }
}
