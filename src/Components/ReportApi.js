import axios from "axios"
const BASE_URL="http://localhost:5000/api/";

if (localStorage.getItem("infiniteScrollEnabled")!=null){
    var TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:logindata")).userdata).loginInfo[0]
   ?JSON.parse(JSON.parse(localStorage.getItem("persist:logindata")).userdata).loginInfo[0].data.accesstoken:null;
    }
console.log("###token",TOKEN)
export const publicrequest=axios.create({
    baseURL:BASE_URL,
})
export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
})