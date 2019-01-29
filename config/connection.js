// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qotr0cd6f5jxd8i7",
  password: "ij5xs58w2nmp0u09",
  database: "i2rso3t1fepocf6g"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
