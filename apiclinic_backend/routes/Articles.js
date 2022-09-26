var express = require('express');
var router = express.Router();
const { creatArticle } = require('../Controller/ArticleController');


router.post('/addArticle', function(req, res, next) {
let {title,description,Author} = req.body;

console.log("recived");
console.log(req.body);
creatArticle(title,description,Author);

  res.send({ Added:"True" });
});

module.exports = router;
