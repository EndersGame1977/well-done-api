exports.up = function(knex) {
  return knex.schema.createTable("PadCountTable", tbl => {
    tbl.increments();

    tbl.integer("countOne");
    tbl.integer("countTwo");
    tbl.integer("countThree");
    tbl.integer("countFour");

    tbl
      .integer("historyFK")
      .references("id")
      .inTable("HistoryTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("PadCountTable");
};
