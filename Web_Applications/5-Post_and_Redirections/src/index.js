const express = require("express");
const path = require("node:path");
const { title } = require("node:process");

const app = express();
const storedUsers = [];

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração do  Body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const tittle = "Homepage";
  const message = "Mensagem dinâmica inserida pelo EJS";

  res.render("index", { title, message });
});

app.get("/formulario", (req, res) => {
  res.render("forms");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  storedUsers.push({ username, password });
  console.log(req.body);

  res.redirect("/usuarios");
});

app.get("/usuarios", (req, res) => {
  res.render("users", { users: storedUsers });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor iniciado!"));
