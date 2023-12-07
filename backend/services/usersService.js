const repo = require("../repositories/usersRepository")

async function login(username, password = "") {
  const user = await repo.getUserByUsername(username);
  const userPass = await repo.getUserByPassword(password);

  if (userPass != undefined && user == undefined) {
    return {error: `This password belongs to an account with the username: ${userPass.username}`};
  }

  if (user == undefined) {
    return {error: "user does not exist"}
  }

  if(user.password != password) {
    return {error: "Nice try, you're close"};
  }

  if(user.password == password) {
    return {user: user};
  }
}

async function signup(first_name, last_name, username, password, pid, admin) {
  try {
    if(admin == undefined) admin = 0;
    return repo.createUser(first_name, last_name, username, password, pid, admin)
  } catch(error) {
    return {error: "Something went wrong"}
  }
}

module.exports = {
  login,
  signup
}