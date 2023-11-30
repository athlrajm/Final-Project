import React, { useState } from 'react'
import Addtocart from './Addtocart';
import './Men.css'
import MenRecord from './Men.json'
import { Button, Card } from 'react-bootstrap'
import { addCart } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';


function Men() {
  const dispatch=useDispatch();
  let [addToCartItem, setaddToCartItem]=useState([])
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
  return (
    <div>

<div class="row">
<Addtocart addToCartItem={addToCartItem}/>
           {MenRecord.map(data=>{
            return(
                <Card className="b-4" style={{ width: '18rem' }} id={data.id}>
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

export default Men