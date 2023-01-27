const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_KEY)
const {verifyTokenandAuthorization,verifyToken, verifyTokenandAdmin} = require("./verifyToken")

//UPDATE
router.put("/payment",verifyTokenandAuthorization, async(req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount:req.body.amount,
        currency:"USD"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
             res.json(stripeErr)
        }else{
            res.json(stripeRes)
        }
    })
   
})





module.exports=router