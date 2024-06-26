const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const apiErr = require("../controllers/errorController");

const router = require("../routes/index");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(flash());
app.use(morgan("dev"));
app.use(session({ secret: "team1", saveUninitialized: true, resave: true }));
app.use(express.static(`${__dirname}/public`));

app.use(router);

app.use(apiErr.onError);
app.use(apiErr.onLost);

module.exports = app;
