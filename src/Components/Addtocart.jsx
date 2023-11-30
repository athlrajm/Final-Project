import React from 'react'
import './Addtocart.css'
const Addtocart=({addToCartItem}) =>{
    let addToCartResult=addToCartItem.map((item)=>{
        return(
            <div>
                <div className='add-to-cart-item' >
            <img src={item.image} alt='' ></img>
                <h6>{item.title}</h6>
                
            </div> 
            </div>
        )
    })
  return (
    
        <div className='add-to-cart-wrapper'>
           <div className='add-to-cart-item'>
            <h6 className="text-center1">Your Cart 🛒</h6>
           {addToCartResult}
        
    </div>
    </div>
  )
}

export default Addtocart