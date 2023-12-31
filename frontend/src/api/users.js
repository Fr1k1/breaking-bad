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

export async function addNewUser(userData) {
  const response = await fetch(`${api}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const responseData = await response.json();

  console.log("Uspjesna registracija");

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return responseData;
}

export async function getUsers() {
  const response = await fetch(`${api}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return responseData;
}

export async function deleteUserById(id) {
  const response = await fetch(`${api}/users/${id}`, {
    method: "DELETE",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to delete user with provided id");
  }

  return responseData;
}

export async function updateUser(userId, userData) {
  console.log(userData);
  console.log(userId);

  const response = await fetch(`${api}/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: userData.first_name,
      last_name: userData.last_name,
      username: userData.username,
      password: userData.password,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user with provided id");
  }

  return responseData;
}
