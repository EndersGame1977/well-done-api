exports.up = function(knex) {
  return knex.schema.createTable("StatusTable", tbl => {
    tbl.increments().primary;
    tbl.integer("sensor");
    tbl.date("date");
    tbl.integer("status");
    tbl.integer("count");
    tbl.integer("total");
    tbl.float("percent");
    tbl.integer("padSecondOne");
    tbl.integer("padSecondTwo");
    tbl.integer("padSecondThree");
    tbl.integer("padSecondFour");
    tbl.integer("padCountOne");
    tbl.integer("padCountTwo");
    tbl.integer("padCountThree");
    tbl.integer("padCountFour");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("StatusTable");
};
