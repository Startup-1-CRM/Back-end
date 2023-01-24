const mongoose = require("mongoose")

const Sales_HistorySchema = new mongoose.Schema(
    {
        UserId:{type:String,required:true},
          amount:{type:String,required:true},
           productId :{type:String,required:true},
            
    },
    {timestamps:true}
)


module.exports = mongoose.model("Sales_History",Sales_HistorySchema)