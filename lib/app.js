const express = require("express");
const cors = require("cors");
require("express-async-errors");

const TranslationController = require("./controllers/translationController");

module.exports = async (config, services) => {
  const app = express();
  app.use(cors());
  app.use((req, res, next) => {
    next();
  });
  app.use(express.json());

  app.use("/translation", TranslationController(config, services));

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
  });

  return new Promise((resolve, reject) => {
    app.listen(3000, (err) => {
      if (err) return reject(error);

      console.log(`start listening on port: ${3000}`);
      resolve();
    });
  });
};
