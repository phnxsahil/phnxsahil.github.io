
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'http://localhost:5173';
const outDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  async function scrollAndCapture(mode) {
      console.log(`Setting up ${mode} mode...`);
      // Must visit the domain first to have access to its localStorage
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      await page.evaluate((modeName) => {
        window.localStorage.setItem('theme', modeName);
      }, mode);
      
      // Reload to apply theme and trigger loader
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      console.log('Waiting for loader to finish...');
      await new Promise(r => setTimeout(r, 6000));
      
      console.log('Scrolling down to trigger animations...');
      await page.evaluate(async () => {
          await new Promise((resolve) => {
              let totalHeight = 0;
              const distance = 800;
              const timer = setInterval(() => {
                  window.scrollBy(0, distance);
                  totalHeight += distance;
                  if (totalHeight >= document.body.scrollHeight) {
                      clearInterval(timer);
                      resolve();
                  }
              }, 400); // 400ms per scroll jump
          });
      });
      
      // small delay to let final lazy loaded stuff render
      await new Promise(r => setTimeout(r, 2000));
      
      // snap back to top
      await page.evaluate(() => { window.scrollTo(0, 0); });
      await new Promise(r => setTimeout(r, 500));
      
      console.log(`Taking ${mode} mode screenshot...`);
      await page.screenshot({ 
        path: path.join(outDir, `portfolio_${mode}.png`), 
        fullPage: true 
      });
  }

  await scrollAndCapture('light');
  await scrollAndCapture('dark');
  
  await browser.close();
  console.log('Done capturing both full screenshots!');
})();
