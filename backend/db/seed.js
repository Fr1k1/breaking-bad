const Database = require("better-sqlite3");
const db = new Database("database.db", { verbose: console.log });

const createUserTable = db.prepare(
  "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, pin INTEGER UNIQUE, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL, admin INTEGER DEFAULT 0)"
);

createUserTable.run();

const createUser = db.prepare(
  "INSERT INTO users (first_name, last_name, username, password, pin, admin) VALUES (?, ?, ?, ?, ?, ?)"
);

createUser.run("scrum", "master", "admin", "admin", 868483869, 1);
createUser.run("testko", "testorovic", "test", "test", 83836716, 0);

const getUsers = db.prepare("SELECT * FROM users");

const createJobTable = db.prepare(
  "CREATE TABLE IF NOT EXISTS jobs(id INTEGER PRIMARY KEY, " +
    "title TEXT, " +
    "description TEXT, " +
    "start_date TEXT, " +
    "duration INTEGER, " +
    "creator_id INTEGER , " +
    "employee_id INTEGER," +
    "FOREIGN KEY(creator_id) REFERENCES users(id) ON DELETE CASCADE," +
    "FOREIGN KEY(employee_id) REFERENCES users(id) ON DELETE CASCADE)"
);

createJobTable.run();

const createJob = db.prepare(
  "INSERT INTO jobs (title, description, start_date, duration, creator_id) VALUES (?, ?, ?, ?, ?)"
);

createJob.run(
  "Cijepanje drva",
  "Treba mi pocijepat 10 metri drva",
  "15.07.2001.",
  90,
  2
);

createJob.run(
  "Pranje auta",
  "Trebam hot crnca misicavog da mi izglanca auto",
  "14.09.2023.",
  45,
  1
);

console.log(getUsers.all());
console.log(db.prepare("SELECT * FROM jobs").all());
