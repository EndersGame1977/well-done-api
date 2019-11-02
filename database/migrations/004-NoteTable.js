exports.up = function(knex) {
  return knex.schema.createTable("NoteTable", tbl => {
    tbl.increments();

    tbl.string("text", 128);

    tbl
      .integer("pumpFK")
      .references("id")
      .inTable("PumpTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl
      .integer("userFK")
      .references("id")
      .inTable("UserTable")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("NoteTable");
};
