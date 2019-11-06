const db = require("../../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByEmail
};

function find() {
  return db("UserTable").select(
    "id",
    "username",
    "password",
    "email",
    "sms",
    "isAdmin",
    "organization"
  );
}

function findBy(filter) {
  return db("UserTable").where(filter);
}

async function add(user) {
  const [id] = await db("UserTable").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("UserTable")
    .where({ id })
    .first();
}

function findByEmail(email) {
  return db("UserTable")
    .where({ email })
    .first();
}
