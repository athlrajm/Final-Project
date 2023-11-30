import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
const Card1 = () => {
  const Navigate=useNavigate();
  return (
    
    <div>
      <div>
        <h6 className='Title1' >SHOP BY COLLECTION</h6>
        
        <CardGroup >
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top"  src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/731/528/new_medium/ziggimenswear.jpg?1551165553" height={600}/>
        <Card.Body>
        <button onClick={()=>Navigate('/Men')}  type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">MEN'S WEAR</button>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top" src="https://media.voguebusiness.com/photos/642ecf24941ada49cb46626d/2:3/w_2560%2Cc_limit/INDIAN-WEDIDNG-DRESSES-voguebus-story.jpg" height={600} />
        <Card.Body>
          
        <button onClick={()=>Navigate('/Women')} type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">WOMEN'S WEAR</button>
        
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top" src="https://i.pinimg.com/736x/33/7c/3b/337c3bbf19678ab2d5149b168aeab960.jpg" height={600} />
        <Card.Body>
        <button onClick={()=>Navigate('/Kids')} type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">KID'S WEAR</button>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </CardGroup>
    
    
    </div>
    </div>
  )
}

export default Card1