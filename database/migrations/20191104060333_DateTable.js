exports.up = function(knex) {
  return knex.schema.createTable("DateTable", tbl => {
    tbl.increments();
    tbl.date("date");
    tbl
      .integer("PumpTableFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("DateTable");
};
