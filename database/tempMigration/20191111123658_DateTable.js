exports.up = function(knex) {
  return knex.schema.createTable("DateTable", tbl => {
    tbl.primary(["pid_sensor", "date"]);
    tbl.integer("pid_sensor");
    tbl.date("date");
    tbl.integer("count");
    tbl.integer("total");
    tbl.integer("pad_second_one");
    tbl.integer("pad_second_two");
    tbl.integer("pad_second_three");
    tbl.integer("pad_second_four");
    tbl.integer("pad_count_one");
    tbl.integer("pad_count_two");
    tbl.integer("pad_count_three");
    tbl.integer("pad_count_four");
    tbl.float("percent");
    tbl.integer("status");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("DateTable");
};
