import React from 'react'
import './Foot.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
const Foot = () => {
  return (
    
      <div>
    <footer className="footer">
    <div className="container">
      <div className="row">
        
        <div className="col-md-4">
          <h4 className='FtTitle1'>DESIGNER WEAR</h4>
          <ul className='FtCap1'>
            <li>Salwar Kameez</li>
            <li>Sarees</li>
            <li>Lehengas</li>
            <li>Gowns</li>
            <li>Kidswear</li>
            <li>Indowestern Styles</li>
            
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className='FtTitle1'>ABOUT US</h4>
          <ul className='FtCap1'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Web Stories</li>
            <li>Testimonial</li>
            <li>KALKI Boutique</li>
            <li>Buying Guide</li>
            
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className='FtTitle1'>POLICIES</h4>
          <ul className='FtCap1'>
            <li>Terms & Conditions</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Customization Charges</li>
            <li>FAQ's</li>
            
          </ul>
        </div>
        
          <div className="row">
            <div className="FtLogo">
          <Container >
         <Row>
        <Col>
          <Image src="https://icons-for-free.com/iconfiles/png/512/and+white+dark+grey+twitter+icon-1320195889927455130.png" height={30}width={30}rounded />
        </Col>
        <Col >
          <Image src="https://i.pinimg.com/736x/c7/cf/40/c7cf40613dbb3b11f1ddb06a668fa088.jpg" height={30}width={30} rounded />
        </Col>
        <Col >
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAB8CAMAAABqpWNRAAAATlBMVEWLjJD///+Gh4v///39/f/t7e6amZ74+Pny8/SLipCDhIiGhYvc3d/p6uvOz9Hj4+XBwcS1tbjHx8mTlJigoaWpqq3W1ti7u76vsLJ+f4RZBjo7AAACYklEQVR4nO2Z226jMBBAYcCAMTbhHv7/R9emajdpa8dhBmtXmvNQVSStjsYwzCXLGIZhGIZhGIZhGIZhGOZC4AdK/bwG7ddvV0i0O0zzMmyjMWvX91qIxlI/4y41Qvd9txozbsMyT9C2lBpSzUaU+SmEmZWkUzH1OY0PVkl1TCDyvCiKUxaF+8OGJChSZhoTkINGSgIZdUOL5LlReJFsaghM6govAgOBSJHf8Ddtu5KY9DvehOJwirzGxwQIRBwT2mQmMlmwQYG793+Xwv2MTXgb2sSfTcpqaFwSjTMZ0SZjwATaLfqFZNAmJmBiP1axLiu2OgBvOinKI2/CNEa5dOiYdC9MbMaZ/HH7S4826V+aWJfMuYQLB4E28ZYEDybujNYyrJLKxMZl9p7jQYM2EZEmzsV7kolNMgi5JDWx35aL7zQTm7i43H9PL6lNrIgnKGlNANzh/P4spzQBcA9y4ckqCU32KphQkpl8JLZAjsWbROVYqIz/XBKaQEwHj3/vvHwXt5O/rHtAX1efHDWbjYcrlCImCXgTfwtoTSDbYhuzHls9toE6dtqjPSiqx0BtP77TqK4X9jvvDZnw/Y6/B3wPdA/o+uJzE7ZvzPhhQXly1vcN/KxgFyQxqfED4nYlMSGYKZHM2Shu2H9o9oifx7o7fqSYx4ZegrEm6Pb8UyXU28Wg6ZYZcSMSH4bMwz7K1ajPydR6nEl3TRnsu5LVMtyOpVfXW7TW4hl7xX3QHSuv232ppNr3C1ZwUkpQoCxu/SfdokQ+k7krx3bw+BKQ7FIYhmEYhmEYhmEYhmEYhvkf+QNqkSARmpuXiwAAAABJRU5ErkJggg==" height={30}width={30} rounded />
        </Col>
        <Col >
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuTpGgtxTDdj377dG7GO0CbiXly3HSvybYQA&usqp=CAU" height={30}width={30} rounded />
        </Col>
      </Row>
    </Container>
    </div>
         </div>
        </div>
    </div>
    {/* <div className='Li1'>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Guides</a>
        </li>
        <li className="navbar__link">
          <a href="/products">Terms of Sale</a>
        </li>
        <li className="navbar__link">
          <a href="/about">Terms of Use</a>
        </li>
        <li className="navbar__link">
          <a href="/about"> Privacy Policy</a>
        </li>
        <li className="navbar__link">
          <a href="/about">India🌐</a>
        </li>
        
      </ul>
      </div> */}
      <div className='f-6' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='f-7' href='https://mdbootstrap.com/'>
          KALKIFASHION.COM
        </a>
      </div>
      </footer>  
    </div>
  )
}

export default Foot