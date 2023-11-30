import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Caro() {
  return (
    <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/ewcA4HXv4tk/maxresdefault.jpg"
          alt="First slide"
        /> */}
        <img
          className="d-block w-100"
          src="https://newcdn.kalkifashion.com/media/wysiwyg/newmagazine/lookbook-fashionweek-img-18.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>WEDDING PARTY STYLES</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://newcdn.kalkifashion.com/media/wysiwyg/newmagazine/bride&baraat-12.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>NEW WEDDING CULTURE
          </h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/X_B3OGg8xsA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCw9fzurYiMg5wkduvmQhKgKUv6YQ"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Caro