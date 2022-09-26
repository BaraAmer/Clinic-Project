var express = require('express');
var router = express.Router();
const { createuser } = require('../Controller/UserController');
//const UserModel = require('../Model/INFO_USERS');
/* GET users listing. */


router.post('/', function(req, res, next) {
let {username,email,password} = req.body;

console.log("recived");
console.log(req.body);
createuser(username,email,password);
 /*
  res.json({
    name: "baraa",

  })
*/
  res.send({ name:"baaraamer" });
});



module.exports = router;
