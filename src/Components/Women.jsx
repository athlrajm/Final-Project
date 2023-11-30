import React, { useState } from 'react'
import WomenRecord from './Women.json'
import Button from '@mui/material/Button';
import { Card } from 'react-bootstrap';
import Addtocart from './Addtocart';
import './Men.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/CartSlice';
function Women() {
  let [addToCartItem, setaddToCartItem]=useState([])
  
  const dispatch=useDispatch();
  function addToCartHandler(addToCartTitle,addToCartImg,addToCartPrice,addToCartId){
    setaddToCartItem([
      ...addToCartItem,
      {
        
        "image":addToCartImg,
        "title":addToCartTitle,
        "price":addToCartPrice,
        "id":addToCartId,
      }
    
    ]);
    dispatch(addCart({addToCartTitle,addToCartImg,addToCartPrice,addToCartId}))
    
    
    
  }
  console.log("wst",addToCartItem)
  return (
    <div>

<div class="row">
  <Addtocart addToCartItem={addToCartItem}/>
           {WomenRecord.map(data=>{
            return(
                <Card className="b-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>Rs.{data.price} ( 20%off )</Card.Text>
        <Button onClick={()=>addToCartHandler(data.title,data.image,data.price,data.id)} class="btn btn-outline-secondary" data-mdb-ripple-color="dark">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button onClick={()=>addToCartHandler(data.title,data.image,data.price,data.id)} class="btn btn-outline-secondary" data-mdb-ripple-color="dark">Buy Now</Button>
      </Card.Body>
    </Card>
            )
           })}
        </div>
        
    </div>
  )
}

export default Women