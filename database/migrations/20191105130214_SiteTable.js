exports.up = function(knex) {
  return knex.schema.createTable("SiteTable", tbl => {
    tbl.string("site_uid").primary();
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
