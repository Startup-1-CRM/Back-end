const mongoose = require("mongoose")

const Support_RequestsSchema = new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        comment:{type:String,required:true},
        UserId:{type:String,required:true},
        type:{type:Number,required:true},
       
       
    },
    {timestamps:true}
)


module.exports = mongoose.model("Support_Requests",Support_RequestsSchema)