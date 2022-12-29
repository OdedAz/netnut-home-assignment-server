const knex = require("knex");

module.exports = class TranslationsDB {
  constructor(config) {
    this._knex = knex(config);
  }

  async testConnection() {
    return this._knex.raw("select 1");
  }

  async returnTranslation() {
    // here i need to return the data from the handler to the client side
    return this._knex("translations").select('*')
  }

  async createTranslation(event) {
    return this._knex("translations").insert(event);
  }
};