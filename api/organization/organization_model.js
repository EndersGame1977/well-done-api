const db = require("../../data/dbConfig.js");

// get ALL orgs (for superUsers)
function findAll() {
  return db("OrgTable");
}

function findAllAndData() {
  return db("OrgTable as ot").join("PumpTable as pt", "ot.id", "pt.org_id");
}

function findByOrgName(org_name) {
  return db("OrgTable as ot")
    .where({ org_name })
    .join("PumpTable as pt", "ot.id", "pt.org_id");
}

function update(changes, id) {
  try {
    return db("OrgTable")
      .where({ id })
      .update(changes);
  } catch (err) {
    console.log(err.message);
  }
}

function findById(id) {
  return db("OrgTable")
    .where({ id })
    .first();
}

async function insert(user) {
  const [id] = await db("OrgTable")
    .insert(user)
    .returning("id");

  return findById(id);
}
const remove = id => {
  return db("OrgTable")
    .where({ id })
    .del();
};

module.exports = {
  findAll,
  findById,
  findAllAndData,
  findByOrgName,
  update,
  remove,
  insert
};
