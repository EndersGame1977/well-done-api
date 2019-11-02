exports.up = function(knex) {
  return knex.schema.createTable("UserTable", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();

    tbl.string("password", 128);

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl
      .string("sms", 128)
      .notNullable()
      .unique();

    tbl.boolean("isAdmin");
    tbl.string("organization", 128);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("UserTable");
};
