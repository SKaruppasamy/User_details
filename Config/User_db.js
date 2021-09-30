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
  if (!err)
      console.log('DB connection succeeded.');
  else
      console.log('DB connection failed \n Error : ' + JSON.stringify(err));
});

module.exports = connection;

