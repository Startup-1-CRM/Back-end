const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRoute = require("./routes/Auth")
const userRoute = require("./routes/Users")
const productRoute = require("./routes/Product")
const orderRoute = require("./routes/Order")
const SupportRequestsRoute = require("./routes/SupportRequests")

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
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)
app.use("/api/supportrequests",SupportRequestsRoute)
app.use("/api/orders",orderRoute) 
// app.use("/api/checkout",stripeRoute)  

 
app.listen(process.env.PORT ||  port, feedback)