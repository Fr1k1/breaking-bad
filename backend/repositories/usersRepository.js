const Database = require("better-sqlite3");
const db = new Database("database.db", {verbose: console.log});

async function getUsers() {
  const getUsers = db.prepare("SELECT * FROM users");
  try {
    return getUsers.all();
  } catch (error) {
    return [];
  }
}

async function getUserByUsername(username) {
  const getUser = db.prepare("SELECT * FROM users WHERE username = ?");
  try {
    return getUser.get(username);
  } catch (error) {
    return undefined;
  }
}

async function getUserById(id) {
  const getUser = db.prepare("SELECT * FROM users WHERE id = ?");
  try {
    return getUser.get(id);
  } catch (error) {
    return undefined;
  }
}

async function getUserByPassword(password) {
  const getUser = db.prepare("SELECT * FROM users WHERE password = ?");
  try {
    return getUser.get(password);
  } catch (error) {
    return undefined;
  }
}

async function createUser(
  first_name,
  last_name,
  username,
  password,
  pin,
  admin = 0
) {
  const createUser = db.prepare(
    "INSERT INTO users (first_name, last_name, username, password, pin, admin) VALUES (?, ?, ?, ?, ?, ?)"
  );
  try {
    const newId = createUser.run(
      first_name,
      last_name,
      username,
      password,
      pin,
      admin
    ).lastInsertRowid;
    return getUserById(newId);
  } catch (error) {
    return {error: error.code};
  }
}

async function updateUserById(id, first_name, last_name, username, password, pin, admin) {
  const updateUser = db.prepare(
    "UPDATE users SET " +
    "first_name = COALESCE(?, first_name), " +
    "last_name = COALESCE(?, last_name), " +
    "username = COALESCE(?, username), " +
    "password = COALESCE(?, password), " +
    "pin = COALESCE(?, pin), " +
    "admin = COALESCE(?, admin) WHERE id = ?"
  );
  try {
    const info = updateUser.run(first_name, last_name, username, password, pin, admin, id);
    return info.changes;
  } catch (error) {
    return {error: error.code}
  }
}

async function deleteUserById(id) {
  const deleteUser = db.prepare("DELETE FROM users WHERE id = ?");
  try {
    const result = deleteUser.run(id);
    return {status: 200, message: `Deleted user with ID ${id}`};
  } catch (error) {
    return {error: error.code};
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getUserByUsername,
  getUserByPassword,
  deleteUserById,
  updateUserById
};
