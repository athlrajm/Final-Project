import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

function Sample() {
    const [first,setfirst]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((display)=>{
            setfirst(display.data.products)
            console.log(display);
        })
        
    },[])
  return (
    
    <div>
        
        {first &&first.map((display)=>
        
         <Card sx={{ maxWidth: 345 }}>
            
      <CardMedia
        component="img"
        alt="image"
        height="140"
        image={display.images[3]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {display.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {display.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy now</Button>
        <Button size="small">Wish List</Button>
      </CardActions>
    </Card>
  )}
    </div>
  )
}

export default Sample