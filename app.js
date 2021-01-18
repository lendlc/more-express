const express = require("express");
const connectDB = require("./config/db");
const app = express();

//load appropriate .env variables
if (process.env.NODE_ENV) {
  require("dotenv").config({
    path: `${__dirname}/config/.env.${process.env.NODE_ENV}`,
  });
} else {
  require(dotenv.config());
}

connectDB()

app.use(express.json());

const userRoutes = require("./routes/user.routes.js");

//load routes
app.use("/users", userRoutes);

module.exports = app;
