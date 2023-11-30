const router=require('express').Router()
const User=require('../Models/User1')
const CRYPTO_JS=require('crypto-js')
const JsonWebToken=require('jsonwebtoken')
router.post("/",async (req, res)=>{
    console.log("***",req.body)
    const newUser=new User({Name:req.body.name,
        Lastname:req.body.Lname,
        Age:req.body.age,
        Email:req.body.Email,
        Password:CRYPTO_JS.AES.encrypt(req.body.Password,process.env.CRYPTO_JS).toString(),})
    try{
     const savedMessage=await newUser.save();
     res.status(200).json(savedMessage)
    }
    catch(err){
        res.statusCode(500).json(err)

    }
});
router.get('/',async(req,res)=>{
    try{
const alluser=await User.find();
res.status(200).json(alluser)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.post('/Login',async(req,res)=>{
    console.log('login data?', req.body);
    try{
        const newuser=await User.findOne({Email:req.body.Email})
        console.log('newuser ?',newuser);
        !newuser&& res.status(401).json('sorry please signup')
        const hashedPassword=CRYPTO_JS.AES.decrypt(newuser.Password,process.env.CRYPTO_JS);

        const originalPassword=hashedPassword.toString(CRYPTO_JS.enc.Utf8);
        console.log("two password checking", originalPassword,req.body.Password);
        originalPassword !=req.body.Password && res.status(401).json('invalid password');
        const accesstoken=JsonWebToken.sign({
            id:newuser._id
        },
        process.env.JWT_SEC,
        {expiresIn:'1d'}
        );
        console.log('second time new user',newuser._doc);
        const  {Password,...others}=newuser._doc;
        
        res.status(200).json({...others,accesstoken})
    }
    catch(err){
        res.status(500).json(err);

    }
})
module.exports=router