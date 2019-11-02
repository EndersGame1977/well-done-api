exports.up = function(knex) {
  return knex.schema.createTable("PumpTable", tbl => {
    tbl.increments();

    tbl
      .integer("sensorID")
      .notNullable()
      .unique();

    tbl.date("constructed");
    tbl.integer("depth");
    tbl.integer("yield");
    tbl.integer("static");
    tbl.integer("levelDynamic");
    tbl.integer("currentStatus");
    tbl.float("latitude");
    tbl.float("longitude");
    tbl.string("village");
    tbl.string("commune");
    tbl.string("district");
    tbl.string("province");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("PumpTable");
};
