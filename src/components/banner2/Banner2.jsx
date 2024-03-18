import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'

import Kaj from "../../assets/Kaj.png"
import "./banner2.css"

const Banner2 = () => {
  return (
    
<>

<section id="About">
<Container>
  
  <Row>
  <div className='banner_kaj'>
  <Col lg={{span:6, offset: 1}}>
   
  <div class="banner_text">
                            <h5>About us</h5>
                            <h1>Our designs solve problems</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
  </Col>
  <Col lg={{span:5, offset: 1}}>
  <div class="banner_img">
                         <img src={Kaj} alt="" />
                        </div>

  </Col>
  </div>
  </Row>
  








</Container>
</section>

</>
  )
}

export default Banner2