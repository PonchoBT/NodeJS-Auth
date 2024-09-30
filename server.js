const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");

connectDB();

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`Server is running successfully on port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`error occured: ${err.message}`);
  server.close(() => process.exit(1));
});