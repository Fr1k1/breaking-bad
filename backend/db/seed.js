const Database = require('better-sqlite3');
const db = new Database('database.db', {verbose: console.log});

const createUserTable = db.prepare("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL, admin INTEGER DEFAULT 0)");

createUserTable.run();

const createUser = db.prepare('INSERT INTO users (username, password, admin) VALUES (?, ?, ?)');

createUser.run('admin', 'admin', 1);
createUser.run('test', 'test', 0);

const getUsers = db.prepare('SELECT * FROM users');

console.log(getUsers.all());
