import { api } from "./ApiSettings";

export async function LoginUser({ username, password }) {
  const response = await fetch(`${api}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  let responseData;

  if (!response.ok) {
    responseData = await response.json();
    if (response.status === 400) {
      console.log("Krivi podaci");
    } else {
      throw responseData;
    }
  } else {
    responseData = await response.json();
  }

  return responseData;
}
