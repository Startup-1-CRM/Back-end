const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()


mongoose.connect(process.env.MINGO_URL).
then(()=>console.log("DBConnection Successful")).catch((err)=>{
    console.log(err)
})




const port = 5000
const feedback =()=>{
 console.log('Server is Running! on '+ port)
}
app.use(cors())
app.use(express.json())
// app.use("/api/users",userRoute)
// app.use("/api/auth",authRoute)
// app.use("/api/product",productRoute)
// app.use("/api/carts",cartRoute)
// app.use("/api/orders",orderRoute) 
// app.use("/api/checkout",stripeRoute)  

 
app.listen(process.env.PORT ||  port, feedback)