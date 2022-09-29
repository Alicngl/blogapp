const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);
console.log(config.db);

connection.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  connection.query("Select * from blog", function (err, result) {});
  console.log("mysql server bağlantısı yapıldı");
});
module.exports = connection.promise();
