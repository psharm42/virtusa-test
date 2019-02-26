const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "virtusa_test",
  password: "sa123456"
});

module.exports = pool.promise();
