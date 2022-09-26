const mongoose = require("mongoose");

const UserSechma = new mongoose.Schema({
    username :{type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    createdAt: {type: Date}
});

const UserModel = mongoose.model('UserModel',UserSechma,'users');


module.exports = UserModel;