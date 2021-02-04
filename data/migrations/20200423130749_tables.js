
exports.up = function(knex) {
  return knex.schema.createTable("tables", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("materials", 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tables");
};
