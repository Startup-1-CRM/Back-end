const mongoose = require("mongoose")

const SupportRequestsSchema = new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        comment:{type:String,required:true},
        UserId:{type:String,required:true},
        type:{type:String,required:true},
       
       
    },
    {timestamps:true}
)


module.exports = mongoose.model("Support_Requests",SupportRequestsSchema)