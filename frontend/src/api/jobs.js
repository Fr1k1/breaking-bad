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
