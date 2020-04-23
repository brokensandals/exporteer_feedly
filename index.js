const puppeteer = require('puppeteer');

module.exports.download = async function(email, password) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto('https://feedly.com');
    const [login] = await page.$x('//button[contains(., \'Get started\')]');
    if (!login) {
      throw 'unable to find Login button';
    }
    await login.click();
    await page.waitForNavigation();

    await Promise.all([
      page.waitForNavigation(),
      page.click('a.feedly'),
    ]);

    await page.type('[type="email"]', email);
    await page.type('[type="password"]', password);
    await Promise.all([
      page.waitForNavigation(),
      page.click('[type="submit"]'),
    ]);
    
    await page.goto('https://feedly.com/i/opml', { waitUntil: 'networkidle0' });
    return await page.evaluate(() => {
      const link = document.evaluate(
        '//a[contains(., \'Download your Feedly OPML\')]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      return fetch(link.href).then(r => r.text());
    });
  } finally {
    browser.close();
  }
}
