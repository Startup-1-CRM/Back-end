const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        first_name:{type:String,required:true,unique:true},
        last_name:{type:String,required:true,unique:true},
        username:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        mobile_no:{type:String,required:true,unique:true},
        role:{type:String,required:true},
        adress:{type:String,required:true},
        password:{type:String,required:true},
        isAdmin:{type:Boolean,default:false}
    },
    {timestamps:true}
)


module.exports = mongoose.model("User",UserSchema)