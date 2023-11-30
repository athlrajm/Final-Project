import { createSlice } from "@reduxjs/toolkit";

const initialState={
    orderItems:[],
    
};
const OrderSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{
        addOrders:(state,action)=>{
           state.cartItems.push(action.payload) 
        }
        
    }
})

export const {addOrders}=OrderSlice.actions;
export default  OrderSlice.reducer;
