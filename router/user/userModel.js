const db = require("../../database/dbConfig");

module.exports = {
  getUser,
  findById,
  update,
  remove
};

function getUser() {
  return db("UserTable");
}

function findById(id) {
  return db("UserTable")
    .where({ id })
    .first()
    .select(
      "id",
      "username",
      "email",
      "organization",
      "sms",
      "isAdmin",
      "created_at",
      "updated_at"
    );
}

function update(id, changes) {
  return db("UserTable")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("UserTable")
    .where({ id })
    .del();
}
