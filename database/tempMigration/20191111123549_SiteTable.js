exports.up = function(knex) {
  return knex.schema.createTable("SiteTable", tbl => {
    tbl.increments("id").primary();
    tbl
      .string("uid_site")
      .references("site_uid")
      .inTable("PumpTable")
      .onDelete("cascade");
    tbl.string("village");
    tbl.string("commune");
    tbl.string("district");
    tbl.string("province");
    tbl.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("SiteTable");
};
