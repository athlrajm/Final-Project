import {createSlice} from "@reduxjs/toolkit"

const user=createSlice({
    name:'userdata',
    initialState:{
        loginInfo:[]
    },
    reducers:{
        loginData:(state,action)=>{
            console.log("***done",action.payload);
            console.log("#####action",action);
            state.loginInfo.push(action.payload);
        },
        logOut:(state,action)=>{
            state.loginInfo=[];
        }
    }
})
export const{loginData,logOut}=user.actions
export default user.reducer