const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')


const signUpRouter=require('./Routs/Routers1')
dotenv.config()
app.use(cors())
mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("mongoose connected")
})
app.use(express.json());
app.use('/api/signup',signUpRouter)
app.listen(5000,()=>{
    console.log("port is connected")
})