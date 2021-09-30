const sql = require("../Config/User_db.js");
console.log('modelfront');
// constructor
const Users = function(User) {
  console.log('333333...33333');
  this.Name=User.Name;
  this.DateofBirth=User.DateofBirth;
  this.Age = User.Age;
  this.EMail = User.EMail;
  this.MobileNo = User.MobileNo;
};
console.log('3...444444');
Users.create = (newUser, result) => {
  console.log('444444');
  sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
    console.log('4444445555555');
    if (err) {
      console.log('44444444777878676');
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log('55555555');
    console.log("created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = Users;