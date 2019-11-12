exports.up = function(knex) {
  return knex.schema.createTable("OrganizationTable", tbl => {
    tbl.increments();
    tbl.string("organization_name", 128);
    tbl.string("email", 128);
    tbl.string("password", 128);
    tbl.string("sms", 128);
    tbl.boolean("isAdmin");
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("OrganizationTable");
};
