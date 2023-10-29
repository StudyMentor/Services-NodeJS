const studentsRouter = require("./students.router");
const tutorsRouter = require("./tutors.router");
const tutoriesRouter = require("./tutories.router");

const express = require("express");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/students", studentsRouter);
  router.use("/tutors", tutorsRouter);
  router.use("/tutories", tutoriesRouter);
}

module.exports = routerApi;
