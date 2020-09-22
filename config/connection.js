//  Set up MySQL connection.
var mysql = require("mysql");

// Connect to MySQL and make sure to change your PW
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "Chloerose1!",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;