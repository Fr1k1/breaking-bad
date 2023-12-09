const service = require("../services/jobsService");

async function getAllJobs(req, res) {
  const response = await service.getAllJobs();
  res.json(response);
}

async function getJobById(req, res) {
  const id = req.params.id;
  const response = await service.getJobById(id);
  if (response == undefined) {
    res.status(404).json({error: "Couldn't find job"});
  } else {
    res.json(response);
  }
}

async function createJob(req, res) {
  const {title, description, start_date, duration} = req.body;
  const creator_id = getIdFromCookie(req.cookies["user"]);
  const response = await service.createJob(
    title,
    description,
    start_date,
    duration,
    creator_id
  );
  if (response.error != undefined) {
    res.status(401).json(response);
  } else {
    res.json(response);
  }
}

async function updateJob(req, res) {
  const id = req.params.id;
  const {title, description, start_date, duration} = req.body;
  const employee_id = getIdFromCookie(req.cookies["user"]);
  const response = await service.updateJob(
    id,
    title,
    description,
    start_date,
    duration,
    employee_id
  );
  if (response == undefined) {
    res.status(500).json({error: "Error deleting job"});
  } else {
    res.json(response);
  }
}

async function deleteJobById(req, res) {
  const id = req.params.id;
  const response = await service.deleteJobById(id);
  if (response == undefined) {
    res.status(500).json({error: "Error deleting job"});
  } else {
    res.json(response);
  }
}

function getIdFromCookie(cookie) {
  return cookie.split(",")[0].slice(-1);
}

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJobById,
};
