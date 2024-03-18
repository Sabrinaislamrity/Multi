import React from 'react'
import "./desing2.css"
import {Container,Row,Col } from 'react-bootstrap'
import Teaching from "../../assets/Teaching.png"

const Desing2 = () => {
  return (
    <>
         <section id='work'>
    <Container>
        <Row>
            <Col lg={6}>
            <div className="work_left">
                    <h4>Who we are</h4>
                  <h2>Goal focussed</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   
                </div>
            </Col>
            <Col lg={6}>  <div class="work_left_one">
                  <h2>Continuous improvement</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div></Col>
        </Row>
        <Row>
            <Col lg={12}>
            <div className="work_down_img">
                           <img src={Teaching} alt="" />
                        </div>
            </Col>
        </Row>
    </Container>
   </section>
    </>
  )
}

export default Desing2