const Model_User = require("../Model/User_model.js");

// Create and Save a new User
exports.newcreate = (req, res) => {
    console.log('23576387676554');
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
console.log('1111111111');
  // Create a User
  const Users= new Model_User({
    Name :req.body.Name,
    DateofBirth :req.body.DateofBirth,
    Age :req.body.Age, 
    EMail: req.body.EMail,
    MobileNo: req.body.MobileNo
  });
console.log('2222222222');
  // Save User in the database
  Model_User.create(Users, (err, data) => {
    console.log('5488676222222');
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    
    else res.send(data);
    console.log('3333333333');
  });
  
};
