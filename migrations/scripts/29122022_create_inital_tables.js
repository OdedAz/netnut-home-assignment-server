exports.up = function (knex) {
  return knex.schema
    .createTable("translations", (table) => {
      table.increments("id").notNullable().primary();
      table.string("text_to_translate").notNullable().index();
      table.string("language_to_translate").notNullable();
      table.string("translation").notNullable();
    })
    
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("translations")
};

