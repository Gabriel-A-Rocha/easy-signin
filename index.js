require("dotenv").config();
const express = require("express");
const automatedLogin = require("./login/automatedLogin.js");
const { join } = require("path");
const config = require("./config.json");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("login"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  /*  const urls = Object.values(config.urls);
  const accounts = config.accounts; */

  const htmlPath = join(__dirname, "login", "login.ejs");
  return res.render(htmlPath, { config: config });
});

app.post("/", (req, res) => {
  console.log(req.body);

  // automatedLogin(url, user, password);

  return res.redirect("/");
});

const readCredentials = () => {
  const urls = Object.keys(config);

  urls.forEach((url) => {
    const accounts = config[url];

    for (account of accounts) {
      console.log(url, "---", account.name);
    }
  });
};

const port = process.env.PORT;
app.listen(port, () => console.log(`Login app running at ${port}`));
