import axios from "axios"
import { publicrequest,userRequest } from "./ReportApi"
import {loginData} from '../Redux/CreateSlice'
export const Api1=async(resp)=>{
    console.log("***",resp)
    try{
     const res=await publicrequest.post("/signup",resp)
     console.log("final ans",res)
    }
    catch(err)
    {
        console.log("error",err)
    }
}
export const Api2=async (dispatch,res1)=>{

    console.log("****login date",res1)
    try{
        const res=await axios.post("http://localhost:5000/api/signup/Login",res1)
        console.log("***login dat",res)
        dispatch(loginData(res))
    }
    catch(err)
    {
        console.log("error ",err)
    }
}
export const updateapi=async (id,data)=>{

    try{
        const res2=await userRequest.put(`/updateX/${id}`,data)
        console.log("updated",res2)
    }
    catch(err){
        console.log("err",err)

    }
}

export const queryApi=async(Email)=>{
    try{
        const res1=await userRequest.get(`/queryX/getdata?Email=${Email}`)
        console.log("Email###", res1);
    }
    catch(err){
 console.log(err);
    }
}