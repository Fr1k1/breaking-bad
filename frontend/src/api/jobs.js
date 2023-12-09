import { api } from "./ApiSettings";

export async function getJobs() {
  const response = await fetch(`${api}/jobs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return responseData;
}

export async function getJobById(id) {
  const response = await fetch(`${api}/jobs/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch job with provided id");
  }

  return responseData;
}

export async function deleteJobById(id) {
  const response = await fetch(`${api}/jobs/${id}`, {
    method: "DELETE",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to delete job with provided id");
  }

  return responseData;
}

export async function addNewJob(jobData) {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user="))
    ?.split("=")[1];

  console.log("Kolacic je", cookieValue);
  const response = await fetch(`${api}/jobs`, {
    method: "POST",
    headers: {
      Cookie: `user=${cookieValue}`,
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
    body: JSON.stringify(jobData),
  });

  const responseData = await response.json();

  console.log("Uspjesno dodavanje posla");

  if (!response.ok) {
    throw new Error("Dodavanje posla nije uspjelo");
  }

  return responseData;
}

export async function reserveJob(employeeId, jobId) {
  console.log(employeeId);

  const response = await fetch(`${api}/jobs/${jobId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ employee_id: employeeId }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to delete job with provided id");
  }

  return responseData;
}
