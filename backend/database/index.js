//connect the database mongo DB atlas
const mongoose=require("mongoose");
const { connectionString } = require("../config/index");
const connectDataBase=async()=>{
    try{
        const connection=await mongoose.connect(connectionString);
        console.log("database Connected Successfully !");
    }catch(error){
        console.log("connect Error in Database !",error);
    }
}
module.exports=connectDataBase;