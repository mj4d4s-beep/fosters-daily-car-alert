const dealers = [
  ["A-1 Auto Sale", "https://www.a-1autoct.com/cars-for-sale-in-East-Windsor-CT-Ellington-Windsor-Bloomfield/used_cars"],
  ["CT Car Co.", "https://www.ctcarco.com/cars-for-sale-in-East-Windsor-CT-Ellington-Windsor-Bloomfield/used_cars"],
  ["Auto Globe", "https://www.autoglobellc.com/cars-for-sale-in-Springfield-MA-Chicopee-Ludlow-Wilbraham/used_cars"],
  ["Shelby Motor Cars", "https://www.shelbymotorsma.com/cars-for-sale-in-Springfield-MA-Worcester-MA-Hartford-CT-Pittsfield-MA/used_cars"],
];

const decode = (value) => value.replace(/&amp;/g, "&").replace(/&#x3D;/gi, "=");

for (const [dealer, inventoryUrl] of dealers) {
  try {
    const response = await fetch(inventoryUrl, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0" } });
    const html = await response.text();
    const hrefs = [...html.matchAll(/href=['"]([^'"]*used_car[^'"]*)['"]/gi)].map((match) => decode(match[1]));
    const urls = [...new Set(hrefs.map((href) => new URL(href, response.url).href))];
    console.error(`${dealer}: ${response.status}, ${urls.length} detail links`);
    for (const url of urls.slice(0, 120)) {
      const detail = await fetch(url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0" } });
      const body = await detail.text();
      const price = Number((body.match(/itemprop=['"]price['"][^>]*content=['"]([0-9,]+)['"]/i)?.[1]
        ?? body.match(/content=['"]([0-9,]+)['"][^>]*itemprop=['"]price['"]/i)?.[1]
        ?? "").replaceAll(",", ""));
      if (!price || price > 5000) continue;
      const title = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() ?? "";
      const vin = body.match(/\b[A-HJ-NPR-Z0-9]{17}\b/)?.[0] ?? null;
      const miles = body.replace(/<[^>]+>/g, " ").match(/([0-9]{2,3},[0-9]{3})\s*(?:miles|mi\b)/i)?.[1] ?? null;
      const image = body.match(/(?:property=['"]og:image['"]\s+content|content)=['"](https?:\/\/[^'"]+)['"]/i)?.[1] ?? null;
      console.log(JSON.stringify({ dealer, price, miles, vin, title, url: detail.url, image }));
    }
  } catch (error) {
    console.error(`${dealer}: ${String(error)}`);
  }
}
