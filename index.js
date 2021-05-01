require("dotenv").config();

const express = require("express");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    slowMo: 2,
  });
  const page = await browser.newPage();

  await page.goto(process.env.URL, { waitUntil: "networkidle0" });

  await page.waitForSelector("#i0116");
  await page.type("#i0116", process.env.LOGIN);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");

  await page.waitForTimeout(1000);

  await page.waitForSelector("#i0118", { visible: true });
  await page.type("#i0118", process.env.PASSWORD);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");

  await page.waitForTimeout(1000);

  await page.waitForSelector("#idSIButton9");
  await page.click("#idSIButton9");
})();
