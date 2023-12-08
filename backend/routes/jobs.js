var express = require("express");
var router = express.Router();
const controller = require("../controllers/jobsController");

router.get("/", controller.getAllJobs);

router.get("/:id", controller.getJobById);

router.post("/", controller.createJob);

router.delete("/:id", controller.deleteJobById);

module.exports = router;
