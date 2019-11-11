const router = require("express").Router();
const db = require("../../database/dbConfig");

//* Gets all pumps
router.get("/", (req, res) => {
  try {
    db("PumpTable as pt")
      .join("StatusTable", "StatusTable.pid_sensor", "pt.sensor_pid")
      .join("SiteTable as st", "st.site_uid", "pt.site_uid")
      //.join("OrganizationTable as ot, ot.id", "pt.Organization_id")
      .select()
      .then(data => {
        res.send(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

// [METHOD] GET
// [ROUTE] /pump/:id
// [DESCRIPTION] To retrieve a pump using the sensor_pid
// [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable
//* Gets one pump
router.get("/:id", (req, res) => {
  try {
    db("PumpTable as pt")
      .where({ sensor_pid: req.params.id })
      .join("StatusTable", "StatusTable.pid_sensor", "pt.sensor_pid")
      .join("SiteTable as st", "st.site_uid", "pt.site_uid")
      //.join("OrganizationTable as ot, ot.id", "pt.Organization_id")
      .select()
      .returning("*")
      .then(data => {
        res.send(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

//* Create pump
router.post("/", (req, res) => {
  try {
    db.insert(req.body)
      .returning("*")
      .into("PumpTable")
      .then(data => {
        res.send(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

//* Update pump
router.patch("/:sensor_pid", (req, res) => {
  try {
    db("PumpTable")
      .where({ sensor_pid: req.params.sensor_pid })
      .update(req.body)
      .returning("*")
      .then(data => {
        res.json(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

//* Delete pump
router.delete("/:sensor_pid", (req, res) => {
  try {
    db("PumpTable")
      .where({ sensor_pid: req.params.sensor_pid })
      .del()
      .then(() => {
        res.json({ success: true });
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

module.exports = router;
