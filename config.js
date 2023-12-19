/** Common config for bookstore. */

require("dotenv").config();

if (process.env.NODE_ENV === 'test') {
  dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_TEST_NAME,
  };
} else {
  dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
  };
}

module.exports = { dbConfig };