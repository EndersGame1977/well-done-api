exports.up = function(knex) {
  return knex.schema.createTable("CurrentTable", tbl => {
    tbl.increments();
    tbl.integer("status");
    tbl.integer("count");
    tbl.integer("second");
    tbl.float("percent");
    tbl.integer("totalSecond");
    tbl.integer("unreportedSecond");
    tbl
      .integer("PumpTableFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("CurrentTable");
};
