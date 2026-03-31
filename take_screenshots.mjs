import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const urls = [
  { url: 'https://miryn-ai.vercel.app', name: 'miryn.png', width: 1400, height: 900 },
  { url: 'https://fl-trd.vercel.app', name: 'fl-trd.png', width: 1400, height: 900 },
  { url: 'https://stashyourmusic.vercel.app', name: 'stash.png', width: 1000, height: 700 },
  { url: 'https://chai-paani.vercel.app', name: 'chai-paani.png', width: 1000, height: 700 },
  { url: 'https://bookieapp.vercel.app', name: 'bookie.png', width: 1000, height: 700 },
];

const dir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  for (const item of urls) {
    console.log(`Taking screenshot of ${item.url}`);
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: item.width, height: item.height });
        await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: path.join(dir, item.name) });
        await page.close();
    } catch (e) {
        console.error("Failed", item.url, e);
    }
  }
  
  await browser.close();
  console.log('Done screenshots');
})();
