import React from 'react'
import './to.css'
import { Container,Row,Col } from 'react-bootstrap'
import Freelancer from "../../assets/Freelancer.png"


const To = () => {
  return (
    <>
        <section id='do'>
        <Container>
            
            <Row>
                <div className='a'>
                <Col lg={6}>
        
         <div class="banner_text">
                          <h5>Our Mission </h5>
                          <h1>Inspire, Innovate, Share</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                      </div>
         
            </Col>
            <Col lg={{span:5, offset: 1}}>
            <div class="banner_img">
                          <img src={Freelancer} alt="" />
                      </div>
            </Col>
            </div>
            </Row>



            <Row>
            <Col lg={{span:5, offset: 1}}>
            <div class="banner_img">
                          <img src={Freelancer} alt="" />
                      </div>
            </Col>
            <Col lg={6}>
            <div class="banner_text">
                        <h5>Our Vision</h5>
                        <h1>Laser focus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
            </Col>
           
            </Row>
           

        </Container>
    </section>


    <section id='do'>
        <Container>
            
            <Row>
                <div className='a'>
                <Col lg={6}>
        
         <div class="banner_text">
                          <h5>Our Mission </h5>
                          <h1>Inspire, Innovate, Share</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                      </div>
         
            </Col>
            <Col lg={{span:5, offset: 1}}>
            <div class="banner_img">
                          <img src={Freelancer} alt="" />
                      </div>
            </Col>
            </div>
            </Row>



            <Row>
            <Col lg={{span:5, offset: 1}}>
            <div class="banner_img">
                          <img src={Freelancer} alt="" />
                      </div>
            </Col>
            <Col lg={6}>
            <div class="banner_text">
                        <h5>Our Vision</h5>
                        <h1>Laser focus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
            </Col>
           
            </Row>
           

        </Container>
    </section>
    </>
  )
}

export default To