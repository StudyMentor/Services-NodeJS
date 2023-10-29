const express = require("express");

const { users } = require("../fake-data/data");

const tutors = users.filter((user) => user.rol == "Tutor");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(tutors);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const tutor = tutors.find((tutor) => tutor.id === Number(id));
  if (tutor) res.json(tutor);
  else res.json("No existe el tutor");
});

module.exports = router;
