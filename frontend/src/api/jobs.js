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
