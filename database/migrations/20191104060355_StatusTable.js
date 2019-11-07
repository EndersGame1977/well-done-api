exports.up = function(knex) {
  return knex.schema.createTable("StatusTable", tbl => {
    tbl.integer("sensor_pid").primary();
    tbl.integer("status");
    tbl.integer("count");
    tbl.integer("second");
    tbl.float("percent");
    tbl.integer("total_second");
    tbl.integer("unreported_second");
    tbl.integer("pad_second_one");
    tbl.integer("pad_second_two");
    tbl.integer("pad_second_three");
    tbl.integer("pad_second_four");
    tbl.integer("pad_count_one");
    tbl.integer("pad_count_two");
    tbl.integer("pad_count_three");
    tbl.integer("pad_count_four");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("StatusTable");
};
