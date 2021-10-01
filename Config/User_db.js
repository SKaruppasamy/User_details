const mysql= require("mysql");
console.log('5476772878399');
const dbConfig = require("./User_config.js");

console.log('42356782');
const connection =mysql.createConnection({
  insecureAuth : true,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
console.log('4444....333333');
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
/*connection.query("CREATE DATABASE ", function (err, result) {
    if (err) throw err;                  
    console.log("Database created");
  });*/
});

module.exports = connection;

