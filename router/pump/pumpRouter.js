const router = require("express").Router();
const db = require("../../database/dbConfig");

//* Gets all pumps
router.get("/", (req, res) => {
  try {
    db.select()
      .from("PumpTable")
      .then(data => {
        res.send(data);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
});

//* Gets one pump
router.get("/:sensor_pid", (req, res) => {
  try {
    db("PumpTable")
      .where({ sensor_pid: req.params.sensor_pid })
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
