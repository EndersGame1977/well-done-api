exports.up = function(knex) {
  return knex.schema.createTable("SiteTable", tbl => {
    tbl.string("id").primary();
    tbl.string("village");
    tbl.string("commune");
    tbl.string("district");
    tbl.string("province");
    tbl
      .integer("PumpTableFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("SiteTable");
};
