const express = require("express");
const dotenv = require("dotenv").config({ path: "./config.env" });
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.static(path.resolve(__dirname, "./build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://quick-pn-d-production.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

///Connecting Database
require("./model/conn");

app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/", require("./routes/addRoute"));

app.listen(5000);
