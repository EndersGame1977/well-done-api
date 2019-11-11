exports.up = function(knex) {
  return knex.schema.createTable("PumpTable", tbl => {
    tbl.string("pump_uid").primary();
    tbl.integer("sensor_pid");
    tbl.string("site_uid");
    tbl.date("constructed");
    tbl.integer("depth");
    tbl.integer("yield");
    tbl.integer("static");
    tbl.integer("level_dynamic");
    tbl.float("latitude");
    tbl.float("longitude");
    tbl.integer("organization_id");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("PumpTable");
};
