const express = require("express");
const login = require("./login/login.js");
const { join } = require("path");
const config = require("./config.json");

const app = express();

app.use(express.static("login"));

app.get("/", (req, res) => {
  const urls = Object.values(config.urls);
  console.log(urls);

  const accounts = config.accounts;
  console.log(accounts);

  const passwords = config.passwords;
  console.log(passwords);

  //login(urls[1], accounts[0], passwords[accounts[0]]);
  const htmlPath = join(__dirname, "login", "login.html");
  res.sendFile(htmlPath);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Login app running at ${port}`));
