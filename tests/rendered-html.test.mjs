import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete daily alert", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Foster’s Car Alert — August 16, 2026/);
  assert.match(html, /Eight cars worth/);
  assert.match(html, /Best overall/);
  assert.match(html, /2012.*Mazda/s);
  assert.match(html, /Reliability/);
  assert.match(html, /Safety/);
  assert.match(html, /Independent inspection/);
  assert.equal((html.match(/<article/g) ?? []).length, 8);
});

test("contains only dealer listing links at or below the price ceiling", async () => {
  const html = await (await render()).text();
  assert.doesNotMatch(html, /craigslist|facebook\.com\/marketplace/i);
  for (const price of html.matchAll(/<strong>\$([\d,]+)<\/strong>/g)) {
    assert.ok(Number(price[1].replaceAll(",", "")) <= 5000);
  }
});
