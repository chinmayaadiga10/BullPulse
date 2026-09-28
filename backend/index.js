require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
  mongoose
    .connect(url)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log(err));
});
