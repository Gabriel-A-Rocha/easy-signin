require("dotenv").config();
const puppeteer = require("puppeteer");

const login = async (url, account, password) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const pages = await browser.pages();
  const page = pages[0];

  await page.goto(url, { waitUntil: "networkidle0" });

  await page.waitForSelector("#i0116");
  await page.type("#i0116", account);

  await page.waitForTimeout(1000);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");

  await page.waitForTimeout(1000);

  await page.waitForSelector("#i0118");
  await page.type("#i0118", password);

  await page.waitForTimeout(1000);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");

  await page.waitForTimeout(1000);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");
};

module.exports = login;
