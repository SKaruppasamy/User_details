module.exports = app => {
    const Controller_Users = require("../Controller/User_controller.js");

    app.get('/api',function(req,res){
      res.json({
          status : 'API works',
          message :'Welcome to User API'
      });
  });
  
    // Create a new User
    app.post("/Users",Controller_Users.newcreate);
  
    
  };