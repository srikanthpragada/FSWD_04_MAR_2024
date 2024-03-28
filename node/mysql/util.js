var mysql = require('mysql');

var con = mysql.createConnection(
{
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "mar4"
});

exports.con = con 