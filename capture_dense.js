const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await page.goto('http://localhost:3000');
  
  // Wait for animations and content to load
  await page.waitForTimeout(2000);
  
  const timestamp = Date.now();
  const dir = "C:/Users/tossy/.gemini/antigravity/brain/ab229689-e87f-4eb1-b87a-0fbaef8edf71/";
  
  await page.evaluate(() => {
    // Scroll a bit down to capture different sections if fullPage takes too long, 
    // but let's just take fullPage.
  });

  const bentoLocator = page.locator('section').filter({ hasText: 'ビジネスの課題を解決' }).first();
  await bentoLocator.screenshot({ path: path.join(dir, `dense_bento_${timestamp}.png`) });

  const deepTechLocator = page.locator('section').filter({ hasText: 'AIがもたらす変化' }).first();
  await deepTechLocator.screenshot({ path: path.join(dir, `dense_deeptech_${timestamp}.png`) });

  const missionLocator = page.locator('section').filter({ hasText: '地域企業を、' }).first();
  await missionLocator.screenshot({ path: path.join(dir, `dense_mission_${timestamp}.png`) });

  const blogsLocator = page.locator('section').filter({ hasText: 'お役立ち情報・事例' }).first();
  await blogsLocator.screenshot({ path: path.join(dir, `dense_blogs_${timestamp}.png`) });
  
  const profileLocator = page.locator('section').filter({ hasText: 'About Founder' }).first();
  await profileLocator.screenshot({ path: path.join(dir, `dense_profile_${timestamp}.png`) });

  await page.screenshot({ path: path.join(dir, `dense_full_${timestamp}.png`), fullPage: true });

  await browser.close();
  console.log(`Screenshots saved with timestamp: ${timestamp}`);
})();
