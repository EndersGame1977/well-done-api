exports.up = function(knex) {
  return knex.schema.createTable("HistoryTable", tbl => {
    tbl.increments();

    tbl.date("date");
    tbl.integer("count");
    tbl.integer("total");
    tbl.integer("status");
    tbl.float("percent");

    tbl
      .integer("pumpFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("HistoryTable");
};
