const router = require("express").Router();
const db = require("../../database/dbConfig");

//* [BASE ROUTE] /api/organization

//* [METHOD] POST
//* [ROUTE] /
//* [DESCRIPTION] To create a new organization.
//* [TABLE] OrgTable
router.post("/", (req, res) => {
  try {
    db.insert(req.body)
      .returning("*")
      .into("OrgTable")
      .then(data => {
        res.send(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});
