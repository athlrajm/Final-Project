import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    cartTotalQuantity:[],
    cartTotalAmount:0,
};
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
           state.cartItems.push(action.payload) 
        },
        removeCart:(state,action)=>{
            const itemIdToRemove = action.payload;  
    const nextCartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
    state.cartItems = nextCartItems;
          
        }
        
    }
})

export const {addCart,removeCart}=CartSlice.actions;
export default  CartSlice.reducer;