const router=require('express').Router()
const Cryptojs=require('crypto-js')

const User1=require('../Models/User1')
const {verifyToken,verifyTokenAndAuthorization}=require('../VerifyToken')
router.put("/:id",verifyToken,verifyTokenAndAuthorization,async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    if(req.body.Password){
        req.body.Password=Cryptojs.AES.encrypt(
            req.body.Password,
            process.env.CRYPTO_JS
             ).toString();

}try{
    const updatedClient=await User1.findByIdAndUpdate(
        req.params.id,{
            $set:req.body,
        },
        {
            new:true
        }
    );
    res.status(200).json(updatedClient);
}
catch(err){
    res.status(500).json(err);
}
})
module.exports=router