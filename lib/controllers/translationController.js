const router = require("express").Router();
const GetGoogleTranslationHandler = require("../handlers/getGoogleTranslationHandler");

module.exports = (config, services) => {
  // All the routers for that handler
  router.post("/get_translation", GetGoogleTranslationHandler(config, services));
  return router;
};
