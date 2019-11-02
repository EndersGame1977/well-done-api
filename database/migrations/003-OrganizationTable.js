exports.up = function(knex) {
  return knex.schema.createTable("OrganizationTable", tbl => {
    tbl
      .integer("userFK")
      .references("id")
      .inTable("UserTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl
      .integer("pumpFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("OrganizationTable");
};
