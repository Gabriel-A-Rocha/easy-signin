const express = require("express");
const automatedLogin = require("./login/automatedLogin.js");
const { join } = require("path");
const config = require("./config.json");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("login"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const urls = Object.values(config.urls);
  const accounts = config.accounts;

  const htmlPath = join(__dirname, "login", "login.ejs");
  return res.render(htmlPath, { urls: urls, accounts: accounts });
});

app.post("/", (req, res) => {
  try {
    const { url, account } = req.body;

    const user = config.accounts[account];
    const password = config.passwords[account];

    automatedLogin(url, user, password);

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Login app running at ${port}`));
