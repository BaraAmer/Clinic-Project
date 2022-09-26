
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    
  await mongoose.connect('mongodb+srv://BaraaAmer:baraa70@cluster0.zkrh0kd.mongodb.net/ClinicDoctor',{
    useNewUrlParser : true,
    useUnifiedTopology:true

}, (error)=>{
    if (error)
        console.log(error);
    else 
    console.log("Database connected");    
});



}

module.exports=  mongoose;
