
const CryptoJS = require("crypto-js")
const router = require("express").Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async(req,res)=>{
    const newUser = new User({
           first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
            mobile_no:req.body.mobile_no,
            role:req.body.role,
            adress:req.body.adress,
        
    })
    try{ 
          const saveUser= await newUser.save()
      
           const {password,...others} = saveUser._doc
   
              res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
  
})


//LOGIN
router.post("/login", async(req,res)=>{
    try{ 
          const user= await User.findOne({username:req.body.username})
           if(!user) return res.status(401).json({error:"User Does not Existnn"})

          const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
            )

            const Userpassword= hashPassword.toString(CryptoJS.enc.Utf8)
            if(Userpassword !== req.body.password) return res.status(401).json({error:"Wrong Password"})

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin:user.isAdmin
                },
                process.env.JWT_SEC,
                {expiresIn:"3d"}
            )


            const {password,...others} = user._doc
   
              res.status(200).json({...others,accessToken})
    }catch(error){
       res.status(500).json(error)
    }
   
})


module.exports=router