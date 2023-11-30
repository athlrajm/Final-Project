import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Cart.css'
const Orders = () => {
    const [cartitems,setCartitems]=useState([]); 
    
    const cartx=useSelector(state=>state.cart.cartItems);
    
    useEffect(()=>{
        setCartitems(cartx);
      },[])
  return (
    <div className='cart-1'>
       <h6 className="text-center">Your Orders</h6>
      
      {cartitems.map((la)=>
      <div className='cart-x1'>
      <img className="cart-img" src={la.addToCartImg} alt="img" />
      <h1 className='cart-title'>{la.addToCartTitle}</h1>
      <h1 className='cart-title'>Rs. {la.addToCartPrice}</h1>
      
      
      </div>
      
  )
}
</div>
  )}

export default Orders