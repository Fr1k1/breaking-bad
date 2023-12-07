const Database = require('better-sqlite3');
const db = new Database('database.db', {verbose: console.log});

async function getUsers() {
  const getUsers = db.prepare('SELECT * FROM users');
  try {
    return getUsers.all()
  } catch (error) {
    return []
  }
}

async function getUserByUsername(username) {
  const getUser = db.prepare('SELECT * FROM users WHERE username = ?');
  try {
    return getUser.get(username)
  } catch (error) {
    return undefined
  }
}

async function getUserByPassword(password) {
  const getUser = db.prepare('SELECT * FROM users WHERE password = ?');
  try {
    return getUser.get(password)
  } catch (error) {
    return undefined
  }
}

async function createUser(username, password, admin = 0) {
  const createUser = db.prepare('INSERT INTO users (username, password, admin) VALUES (?, ?, ?)');
  try {
    return createUser.run(username, password, admin).lastInsertRowid;
  } catch (error) {
    return 0
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserByUsername,
  getUserByPassword
}