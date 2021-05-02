const express = require("express");
const login = require("./login/login.js");
const { join } = require("path");
const config = require("./config.json");
const ejs = require("ejs");

const app = express();

app.use(express.static("login"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const urls = Object.values(config.urls);

  const accounts = config.accounts;

  const passwords = config.passwords;

  //login(urls[1], accounts.Admin, passwords.Admin);
  const htmlPath = join(__dirname, "login", "login.ejs");
  res.render(htmlPath, { urls: urls, accounts: accounts });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Login app running at ${port}`));
