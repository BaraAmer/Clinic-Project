const UserModel = require('../Model/INFO_USERS');


exports. createuser =  async function (nameuser,email,pass){

    UserModel.exists({ email: email }).then( async (exists) => {
        if (exists) {
            console.log("The user exixt");
        } else {
            console.log("The user not exixt");
            const newuser = new UserModel({
                username: nameuser,
                email: email,
                password: pass,
                createdAt: new Date()
            })
        
            const res = await newuser.save();
            console.log(res);
        }
      })


   
}
