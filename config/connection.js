const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : require('../secrets'));
}
  connection.connect();
  module.exports = connection;
  