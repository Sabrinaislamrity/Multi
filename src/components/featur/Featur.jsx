import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Illustration from "../../assets/Illustration.png"
import "./featur.css"

const Featur = () => {
  return (
    <>

  <section id="banner">
  <Container>
    
    <Row>
    <Col lg={5}>
    <div className="banner_content">
              <h1>All the features you need</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="btn">
                <a className="view" href="work.html">View Pricing<FaArrowRightLong /></a>
              
              </div>
            </div>
    </Col>
    <Col lg={{span:6, offset: 1}}>
    <div className="banner-img">
    <img src={Illustration} alt=""/>
            </div>

    </Col>
    </Row>
    
  







  </Container>
  </section>
  
</>

  )
}

export default Featur