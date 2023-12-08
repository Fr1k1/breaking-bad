var express = require('express');
var router = express.Router();
const controller = require("../controllers/jobsController")

router.get('/', controller.getAllJobs);

router.get('/:id', controller.getJobById);

router.post('/', controller.createJob);

module.exports = router;
