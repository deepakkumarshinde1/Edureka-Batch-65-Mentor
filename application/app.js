const express = require("express");
const mongoose = require("mongoose");

const apiRouter = require("./Router/APIRouter");
const app = express();
const MONGODB_URI = "mongodb://localhost:27017/back64edurekaapi";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running on port ", 3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
