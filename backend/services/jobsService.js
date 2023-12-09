const repo = require("../repositories/jobsRepository");

async function getJobsByUserId(userId) {
  try {
    return repo.getJobsByUserId(userId);
  } catch (error) {
    return [];
  }
}

async function getJobById(jobId) {
  try {
    return repo.getJobById(jobId);
  } catch (error) {
    return undefined;
  }
}

async function getAllJobs() {
  try {
    return repo.getJobs();
  } catch (error) {
    return [];
  }
}

async function createJob(title, description, start_date, duration, creator_id) {
  try {
    return repo.createJob(title, description, start_date, duration, creator_id);
  } catch (error) {
    return { error: "Couldn't create job" };
  }
}

async function updateJob(
  id,
  title,
  description,
  start_date,
  duration,
  employee_id
) {
  try {
    return repo.updateJob(
      id,
      title,
      description,
      start_date,
      duration,
      employee_id
    );
  } catch (error) {
    return { error: "Couldn't update job" };
  }
}

async function deleteJobById(id) {
  try {
    return repo.deleteJobById(id);
  } catch (error) {
    return { error: "Couldn't delete job" };
  }
}

module.exports = {
  getJobsByUserId,
  createJob,
  getAllJobs,
  getJobById,
  deleteJobById,
};
