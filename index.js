const express = require("express");
const credentials = require("./credentials.json");
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    isLandscape: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  //await page.goto("https://dev.simplista4sobeys.com/");
  await page.goto("https://github.com/login");

  //await page.type("#login_field", process.env.GITHUB_USER);
  //await page.type("#password", process.env.GITHUB_PWD);

  //await browser.close();

  console.log(process.env);
})();
