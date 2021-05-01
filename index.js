const express = require("express");
const login = require("./login/login.js");
const { join } = require("path");
const config = require("./config.json");

const app = express();

app.use(express.static("login"));

app.get("/", (req, res) => {
  const urls = Object.values(config.urls);
  console.log(urls[1]);

  const accounts = config.accounts;
  console.log(accounts.Admin);

  const passwords = config.passwords;
  console.log(passwords.Admin);

  login(urls[1], accounts.Admin, passwords.Admin);
  const htmlPath = join(__dirname, "login", "login.html");
  res.sendFile(htmlPath);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Login app running at ${port}`));
