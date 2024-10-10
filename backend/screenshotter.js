const { Builder, Browser } = require('selenium-webdriver');
const fs = require('fs');

async function saveFile(url, driver) {
  await driver.get(url);
  // let the website load in case it has a loader
  await new Promise(resolve => setTimeout(resolve, 5000));
  const screenshot = await driver.takeScreenshot();

  let fileName = url.replace('https://', '')
  fileName = fileName.replace('www.', '')
  fileName = fileName.replaceAll('/', '-');
  fileName = fileName.replaceAll('.', '-');
  fs.writeFileSync(`screenshots/${fileName}.png`, screenshot, 'base64');
}

// Open a new Firefox window and take a screenshot of the currently visible portion of the window
async function screenshot(urls) {
  let driver;

  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    driver.manage().window().setRect({ width: 1024, height: 853 }); // 4:3 resolution after you factor in the height of the menu bar

    if (urls instanceof Array) {
      for (const url of urls) {
        await saveFile(url, driver)
      }
    } else { // just a single url
      await saveFile(urls, driver)
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

module.exports = { screenshot };
