const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./helpers/logger/winston");
const schoolRoutes = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(schoolRoutes);

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Server run");
    app.listen(process.env.SERVER_PORT);
  })
  .catch((err) => {
    logger.log("error", `Error with starting server ${err}`);
  });
