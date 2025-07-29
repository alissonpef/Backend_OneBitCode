const express = require('express');
const session = require('express-session');
const path = require('node:path');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'sua-chave-muito-secreta-e-longa',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60
  }
}));

app.use(router);

app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`));