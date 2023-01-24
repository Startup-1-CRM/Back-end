const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        product_type :{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        product_number:{type:Number},
        quantity:{type:Number,default:1},
        salesman_Id:{type:Number,default:1},
       
    },
    {timestamps:true}
)


module.exports = mongoose.model("Product",ProductSchema)