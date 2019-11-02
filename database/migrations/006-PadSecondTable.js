exports.up = function(knex) {
  return knex.schema.createTable("PadSecondTable", tbl => {
    tbl.increments();

    tbl.integer("secondOne");
    tbl.integer("secondTwo");
    tbl.integer("secondThree");
    tbl.integer("secondFour");

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
  return knex.schema.dropTableIfExists("PadSecondTable");
};
