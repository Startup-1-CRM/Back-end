const mongoose = require("mongoose")

const Sales_OrderSchema = new mongoose.Schema(
    {
        productId :{type:String,required:true,unique:true},
        userId:{type:String,required:true,unique:true},
        
    },
    {timestamps:true}
)


module.exports = mongoose.model("Sales_Order",Sales_OrderSchema)