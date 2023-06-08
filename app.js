const express = require("express");
const dotenv = require("dotenv").config({ path: "./config.env" });
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.static(path.join(__dirname, './build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

///Connecting Database
require("./model/conn")

app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/", require("./routes/addRoute"));

app.listen(5000);
