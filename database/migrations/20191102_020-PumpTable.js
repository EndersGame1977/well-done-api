exports.up = function(knex) {
  return knex.schema.createTable("PumpTable", tbl => {
    tbl.string("id").primary();
    tbl.integer("sensor");
    tbl.date("constructed");
    tbl.integer("depth");
    tbl.integer("yield");
    tbl.integer("static");
    tbl.integer("levelDynamic");
    tbl.float("latitude");
    tbl.float("longitude");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("PumpTable");
};
