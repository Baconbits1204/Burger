const mysql = require("mysql");
require('dotenv').config();
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SECRET_KEY,
    database: "Burgers_db"
  });
  connection.connect(function(err) {
      if (err) {
          console.log("error connecting: " + err.stack);
          return;
    }
    console.log("connected with" + connection.threadId);
  });
  module.exports = connection;