exports.up = function(knex) {
  return Promise.all([
    knex.schema.table("PumpTable", function(table) {
      table
        .biginteger("org_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("OrgTable")
        .onDelete("CASCADE")
        .index();
    }),
    knex.schema.table("SiteTable", function(table) {
      table
        .string("uid_site")
        .unsigned()
        .notNullable()
        .references("site_uid")
        .inTable("PumpTable")
        .onDelete("CASCADE");
    }),
    knex.schema.table("StatusTable", function(table) {
      table
        .biginteger("pid_sensor")
        .unsigned()
        .notNullable()
        .references("sensor_pid")
        .inTable("PumpTable")
        .onDelete("CASCADE")
        .index();
    }),
    knex.schema.table("DateTable", function(table) {
      table
        .biginteger("pid_sensor")
        .unsigned()
        .notNullable()
        .references("sensor_pid")
        .inTable("PumpTable")
        .onDelete("CASCADE")
        .index();
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("PumpTable"),
    knex.schema.dropTable("SiteTable"),
    knex.schema.dropTable("StatusTable"),
    knex.schema.dropTable("DateTable")
  ]);
};
