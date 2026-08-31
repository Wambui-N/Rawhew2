import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT =
  "C:/Users/wambu/AppData/Local/Temp/claude/c--Users-wambu-OneDrive-Documents-Websites-rawhew-ranch-two/a2de608a-6f26-47f1-8052-4baa68553348/scratchpad";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--hide-scrollbars"],
});

const errors = [];

async function grab(name, url, vw, vh, offsets) {
  const page = await browser.newPage();
  page.on("pageerror", (e) => errors.push(`[${name}] ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console: ${m.text()}`);
  });
  await page.setViewport({ width: vw, height: vh, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const step = Math.round(window.innerHeight * 0.5);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 250));
  });
  if (offsets === "full") {
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
  } else {
    for (const off of offsets) {
      await page.evaluate((y) => window.scrollTo(0, y), off);
      await new Promise((r) => setTimeout(r, 300));
      await page.screenshot({ path: `${OUT}/${name}-${off}.png` });
    }
  }
  await page.close();
}

await grab("home", "http://localhost:3000/", 1440, 900, [
  0, 850, 1750, 2700, 3600, 4500, 5400, 6300, 7200, 8100, 9000, 9900, 10800, 11700,
  12600,
]);
await grab("menu", "http://localhost:3000/menu", 1440, 900, "full");
await grab("home-m", "http://localhost:3000/", 390, 844, "full");

await browser.close();
console.log(errors.length ? "ERRORS:\n" + errors.join("\n") : "no page errors");
