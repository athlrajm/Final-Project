import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { removeCart } from '../Redux/CartSlice'
const Cart = () => {
    const [cartitems,setCartitems]=useState([]);
    const[orderx,setOrderx]=useState([]);
    const dispatch=useDispatch();
    const cartx=useSelector(state=>state.cart.cartItems);
    // const ordery=useSelector(state=>state.orders.orderx)
    const handleRemoveFromCart=(cartitems)=>{

      dispatch(removeCart(cartitems));
 
     }
     function addToOrders(addToOrderTitle){
      setOrderx([
        ...orderx,{title:addToOrderTitle}
      ]);
     }
    
     
    useEffect(()=>{
      setCartitems(cartx);
    },[])
    // useEffect(()=>{
    //   setOrderx(ordery)
    // })
    console.log("cartx",cartx);
    // console.log("ordd",ordery);
  return (
    
    <div className='cart-1'>
       <h6 className="text-center">Your Cart 🛒</h6>
      
      {cartitems.map((la)=>
      <div className='cart-x1'>
      <img className="cart-img" src={la.addToCartImg} alt="img" />
      <h1 className='cart-title'>{la.addToCartTitle}</h1>
      <h1 className='cart-title'>Rs. {la.addToCartPrice}</h1>
      
      <button className='btx-2' onClick={()=>handleRemoveFromCart(cartitems)}>remove</button>
      </div>
      
      )}
      <div className='btx-1'>
        <button className='btx-2' onClick={()=>addToOrders(cartx.title)}>Proceed To Pay</button>
      </div>
      
      
    </div>
  )
  }

export default Cart