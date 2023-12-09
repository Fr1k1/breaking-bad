const repo = require("../repositories/usersRepository");

async function login(username, password = "") {
  const user = await repo.getUserByUsername(username);
  const userPass = await repo.getUserByPassword(password);

  if (user != undefined && user.password == password) {
    return { user: user };
  }

  if (userPass != undefined) {
    return {
      error: `This password belongs to an account with the username: ${userPass.username}`,
    };
  }

  if (user == undefined) {
    return { error: "user does not exist" };
  }

  if (user.password != password) {
    return { error: "Nice try, you're close" };
  }
}

async function signup(first_name, last_name, username, password, pin, admin) {
  try {
    if (admin == undefined) admin = 0;
    return repo.createUser(
      first_name,
      last_name,
      username,
      password,
      pin,
      admin
    );
  } catch (error) {
    return { error: "Something went wrong" };
  }
}

async function getAllUsers() {
  try {
    return repo.getUsers();
  } catch (error) {
    return [];
  }
}

async function updateUserById(id, first_name, last_name, username, password, pin, admin) {
  try {
    return repo.updateUserById(id, first_name, last_name, username, password, pin, admin);
  } catch (error) {
    return { error: "Couldn't update user" };
  }
}

async function deleteUserById(id) {
  try {
    return repo.deleteUserById(id);
  } catch (error) {
    return { error: "Couldn't delete user" };
  }
}

module.exports = {
  login,
  signup,
  getAllUsers,
  deleteUserById,
  updateUserById
};
