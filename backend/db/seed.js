const Database = require('better-sqlite3');
const db = new Database('database.db', {verbose: console.log});

const createUserTable = db.prepare("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, pin INTEGER UNIQUE, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL, admin INTEGER DEFAULT 0)");

createUserTable.run();

const createUser = db.prepare('INSERT INTO users (first_name, last_name, username, password, pin, admin) VALUES (?, ?, ?, ?, ?, ?)');

createUser.run('scrum', 'master', 'admin', 'admin', 868483869, 1);
createUser.run('testko', 'testorovic', 'test', 'test', 83836716, 0);

const getUsers = db.prepare('SELECT * FROM users');

console.log(getUsers.all());
