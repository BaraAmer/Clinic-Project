const mongoose = require("mongoose");

const ArticleSechma = new mongoose.Schema({
    title :{type: String,required: true},
    description: {type: String,required: true},
    Author: {type: String,required: true},
    createdAt: {type: Date}
});


const ArticleModel = mongoose.model('ArticleModel',ArticleSechma,'articles');


module.exports = ArticleModel;