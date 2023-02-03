const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        first_name:{type:String,required:true,unique:true},
        last_name:{type:String,required:true,unique:true},
        username:{type:String},
        email:{type:String,required:true,unique:true},
        mobile_no:{type:String},
        role:{type:String},
        adress:{type:String},
        confirmPassword:{type:String,required:true},
        password:{type:String,required:true},
        isAdmin:{type:Boolean,default:false}
    },
    {timestamps:true}
)


module.exports = mongoose.model("User",UserSchema)