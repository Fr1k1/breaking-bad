const Database = require('better-sqlite3');
const db = new Database('database.db', {verbose: console.log});

const deleteUsers = db.prepare('DELETE FROM users');

deleteUsers.run();