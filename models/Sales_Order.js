const mongoose = require("mongoose")

const Sales_OrderSchema = new mongoose.Schema(
    {
        productId :{type:String,required:true},
        userId:{type:String,required:true},
          amount:{type:Number,required:true},
        
    },
    {timestamps:true}
)


module.exports = mongoose.model("Sales_Order",Sales_OrderSchema)