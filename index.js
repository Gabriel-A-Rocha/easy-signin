function esi() {
  const express = require("express");
  const automatedLogin = require("./login/automatedLogin.js");
  const { join } = require("path");

  const signin = require("./credentials/credentials.json");

  const open = require("open");

  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("login"));

  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    const htmlPath = join(__dirname, "login", "login.ejs");
    return res.render(htmlPath, { file: signin });
  });

  app.post("/", (req, res) => {
    const url = Object.keys(req.body)[0];
    const role = Object.values(req.body)[0];

    const credentials = signin[url].find((l) => l.name === role);
    const user = credentials.login;
    const password = credentials.password;

    automatedLogin(url, user, password);

    return res.redirect("/");
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Login app running at ${port}`));

  open(`http://localhost:${port}`, {
    app: { name: open.apps.chrome, arguments: ["--incognito"] },
  });
}

module.exports = esi;
