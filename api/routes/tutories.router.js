const express = require("express");

const { tutories } = require("../fake-data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(tutories);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const tutory = tutories.find((tutory) => tutory.id === Number(id));
  if (tutory) res.json(tutory);
  else res.json("No existe el tutor");
});

module.exports = router;
