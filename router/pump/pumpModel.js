const db = require("../../database/dbConfig");

module.exports = {
  getPump,
  findPumpById,
  addPump,
  updatePump,
  removePump
};

//* Gets all pumps
function getPump() {
  return db("PumpTable");
}

//* Gets one pump
function findPumpById(id) {
  return db("PumpTable")
    .where("PumpTable.id", id)
    .first();
}

//* Create pump
async function addPump(pump) {
  const [id] = await db("PumpTable").insert(pump, "id");
  return findPumpById(id);
}

//* Update pump
function updatePump(id, changes) {
  return db("PumpTable")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findPumpById(id);
      } else {
        return null;
      }
    });
}

//* Delete pump
function removePump(id) {
  return db("PumpTable")
    .where({ id })
    .del();
}
