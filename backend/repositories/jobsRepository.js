const Database = require("better-sqlite3");
const db = new Database("database.db", { verbose: console.log });
const userRepository = require("./usersRepository");

async function getJobs() {
  const getJobs = db.prepare("SELECT * FROM jobs");
  try {
    let jobs = getJobs.all();
    return Promise.all(
      jobs.map(async (job) => {
        const creator = await userRepository.getUserById(job.creator_id);
        const employee = await userRepository.getUserById(job.employee_id);
        return { job: job, creator: creator, employee: employee };
      })
    );
  } catch (error) {
    return [];
  }
}

async function getJobsByUserId(userId) {
  const getJobs = db.prepare("SELECT * FROM jobs WHERE creator_id = ?");
  try {
    let jobs = getJobs.all(userId);
    return Promise.all(
      jobs.map((job) => {
        const creator = userRepository.getUserById(job.creator_id);
        const employee = userRepository.getUserById(job.employee_id);
        return { job: job, creator: creator, employee: employee };
      })
    );
  } catch (error) {
    return [];
  }
}

async function getJobById(id) {
  const getJob = db.prepare("SELECT * FROM jobs WHERE id = ?");
  try {
    let job = getJob.get(id);
    const creator = await userRepository.getUserById(job.creator_id);
    const employee = await userRepository.getUserById(job.employee_id);
    return { job: job, creator: creator, employee: employee };
  } catch (error) {
    return undefined;
  }
}

async function deleteJobById(id) {
  const deleteJob = db.prepare("DELETE FROM jobs WHERE id = ?");
  try {
    const result = deleteJob.run(id);
    return { status: 200, message: `Deleted job with ID ${id}` };
  } catch (error) {
    return { error: error.code };
  }
}

async function createJob(title, description, start_date, duration, creator_id) {
  const createJob = db.prepare(
    "INSERT INTO jobs (title, description, start_date, duration, creator_id) VALUES (?, ?, ?, ?, ?)"
  );
  try {
    const newId = await createJob.run(
      title,
      description,
      start_date,
      duration,
      creator_id
    ).lastInsertRowid;
    return getJobById(newId);
  } catch (error) {
    return { error: error.code };
  }
}

async function updateJob(
  id,
  title,
  description,
  start_date,
  duration,
  creator_id
) {
  const updateJob = db.prepare(
    "UPDATE jobs SET title = ?, description = ?, start_date = ?, duration = =, creator_id = ? WHERE id = ?"
  );
  try {
    const info = await updateJob.run(
      title,
      description,
      start_date,
      duration,
      creator_id,
      id
    );
    return info.changes;
  } catch (error) {
    return { error: error.code };
  }
}

module.exports = {
  getJobs,
  getJobsByUserId,
  getJobById,
  updateJob,
  createJob,
  deleteJobById,
};
