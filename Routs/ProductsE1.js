const router=require('express').Router()
const Cartproducts=require('../Models/CartSchema')
router.post('/cartxproduct',async(req,res)=>{
    console.log("###products",req.body)
    try{
   const res2=new Cartproducts(req.body) 
   const resx=await res2.save()

   res.status(200).json(resx)
    }
    catch(err){
res.status(500).json(err)
    }
})
module.exports=router