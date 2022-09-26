var express = require('express');
var router = express.Router();
const UserModel = require('../Model/INFO_USERS');




router.post('/', function(req, res, next) {
let {username,email,password} = req.body;

console.log("recived");
console.log(req.body);

        UserModel.findOne({ 'email': email }, function (err, user) {
        
        if (err) 
            console.log('there is error.');;
        if(user)
            if (req.body.password == user.password ){
                console.log('%s %s is a %s.', user.email, user.username,user.password);     
                res.send({ message:"welcome :" + user.username });
                    
            }
            
            else {
                console.log("Password is wrong");   
                res.send({ message:"Password is wrong" }); 
            }

        else{
            console.log("There isn't user ");
            res.send({ message:"There isn't user" }); 
        }
        
    });

   
  
});



module.exports = router;
