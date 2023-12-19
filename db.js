/** Database config for database. */


const { Client } = require("pg");
const { dbConfig } = require("./config");

let db = new Client(dbConfig);

db.connect();

module.exports = db;