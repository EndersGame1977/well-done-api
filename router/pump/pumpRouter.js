const router = require("express").Router();
const PumpModel = require("./pumpModel");

//* Gets all pumps
router.get("/", (req, res) => {
  PumpModel.getPump()
    .then(pump => {
      res.status(200).json(pump);
    })
    .catch(error => {
      res
        .status(500)
        .json({ req, error, message: "error retrieving all pumps" });
    });
});

//* Gets one pump
router.get("/:id", (req, res) => {
  PumpModel.findPumpById(req.params.id)
    .then(pump => {
      res.status(200).json(pump);
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "we ran into an error retreving the pump" });
    });
});

//* Create pump
router.post("/", (req, res) => {
  const pump = req.body;
  PumpModel.addPump(pump)
    .then(inserted => {
      res.status(201).json(inserted);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error, message: "we ran into an error posting your tab" });
    });
});

//* Update pump
router.put("/:id", (req, res) => {
  PumpModel.updatePump(req.params.id, req.body)
    .then(update => {
      res.status(201).json(update);
    })
    .catch(err => {
      res.status(500).json({ err, message: "error updating your pump" });
    });
});

//* Delete pump
router.delete("/:id", (req, res) => {
  PumpModel.removePump(req.params.id)
    .then(del => {
      res
        .status(200)
        .json({ message: "the pump has successfully been deleted" })
        .end(del);
    })
    .catch(err => {
      res.status(500).json({ err, message: "this pump does not exist" });
    });
});

module.exports = router;
