const express = require("express");

const { users } = require("../fake-data/data");

const students = users.filter((user) => user.rol == "Estudiante");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(students);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const student = students.find((student) => student.id === Number(id));
  if (student) res.json(student);
  else res.json("No existe el estudiante");
});

module.exports = router;
