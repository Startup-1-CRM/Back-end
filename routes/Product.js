const router = require("express").Router()
const Product = require("../models/Product")
const {verifyTokenandAuthorization,
        verifyToken,
        verifyTokenandAdmin 
      } = require("./verifyToken")




      //CREATE
    router.post("/",verifyTokenandAdmin, async(req,res)=>{
    const newProduct = new Product(req.body)
    try{ 
          const saveProduct= await newProduct.save()
         res.json(saveProduct)
    }catch(err){
        res.json(err)
    }
  
})





// //UPDATE
router.put("/:id",verifyTokenandAdmin, async(req,res)=>{
    
    try{
        const updatedproduct = await Product.findByIdAndUpdate(req.params.id,
            {
            $set:req.body
        },
        {new:true}
        )
        res.json(updatedproduct)
    }catch(err){
        res.json(err)
    }
})




// //DELETE
router.delete("/:id",verifyTokenandAuthorization, async(req,res)=>{
    
    try{
       await Product.findByIdAndDelete(req.params.id)
         res.json("Product has been deleted")
    }catch(err){
        res.json(err)
    }
})


// //GET PRODUCT
router.get("/find/:id",async(req,res)=>{
    try{
       const product= await Product.findById(req.params.id)
    
        res.json(product)
    }catch(err){
        res.json(err)
    }
})


// //GET ALL PRODUCT
router.get("/",async(req,res)=>{
    const queryNew = req.query.new
    const queryCatigory = req.query.Catigory
    try{
        let products

        if(queryNew){
            products = await Product.find().sort({createdAt:-1}).limit(1) 
        }else if(queryCatigory){
             products = await Product.find({
                categories:{
                    $in:[queryCatigory]
                }
             }) 
        }else{
            products = await Product.find()
        }
      
   
        res.json(products )
    }catch(err){
        res.json(err)
    }
})




module.exports=router