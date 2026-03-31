import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORTFOLIO_URL = 'http://localhost:5173';
const OUTPUT_DIR = path.join(__dirname, 'portfolio_screenshots');

if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const SECTIONS = [
  { id: '#hero', name: '01_hero.png' },
  { id: '#featured', name: '02_featured_projects.png' },
  { id: '#work', name: '03_additional_work.png' },
  { id: '#contact', name: '04_contact.png' }
];

(async () => {
  console.log('Launching browser to capture portfolio sections...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set to a standard desktop size, ensuring dark mode since it's the default
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  
  console.log(`Navigating to ${PORTFOLIO_URL}...`);
  try {
    await page.goto(PORTFOLIO_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for Loader and initial animations (2.4s loader + exit animation + stagger)
    console.log('Waiting for loader to complete...');
    await new Promise(r => setTimeout(r, 8000));
    
    for (const section of SECTIONS) {
      console.log(`Capturing section ${section.id}...`);
      
      const element = await page.$(section.id);
      if (element) {
        // Scroll element into view to trigger any scroll animations
        await page.evaluate((sel) => {
          document.querySelector(sel).scrollIntoView();
        }, section.id);
        
        // Wait for stagger/scroll animations to complete
        await new Promise(r => setTimeout(r, 1500));
        
        // Capture screenshot of the specific element
        await element.screenshot({ 
          path: path.join(OUTPUT_DIR, section.name) 
        });
        console.log(`Saved ${section.name}`);
      } else {
        console.warn(`Could not find section ${section.id}`);
      }
    }
    
    // Also take a full page screenshot
    console.log('Capturing full page screenshot...');
    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, '00_full_page.png'),
      fullPage: true 
    });
    console.log('Saved 00_full_page.png');

  } catch (err) {
    console.error('Failed to capture screenshots:', err);
  } finally {
    await browser.close();
    console.log(`All screenshots saved to ${OUTPUT_DIR}`);
  }
})();
