import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./meet.css"
import Cout from "../../assets/Cout.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Black from "../../assets/Black.png"
import Heat from "../../assets/Heat.png"
import Blond from "../../assets/Blond.png"

const Meet = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="top_text_blog">
                    <h6>Meet our team</h6>
               
                  </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                <div class="item">
                          
                           
                          <div class="man_img">
                          <img src={Cout} alt="" />
                        

                            <div class="man_over">
                            <FaFacebook />
                            <FaTwitterSquare />
                            <FaInstagramSquare />
                            </div>

                          

                          </div>
                          <h4>John Smith</h4>
                          <p>CEO</p>
                        </div>
                </Col>
                <Col lg={3}>  <div class="item">
                          
                           
                          <div class="man_img">
                          <img src={Heat} alt="" />
                        

                            <div class="man_over">
                            <FaFacebook />
                            <FaTwitterSquare />
                            <FaInstagramSquare />
                            </div>

                          

                          </div>
                          <h4>John Smith</h4>
                          <p>CEO</p>
                        </div></Col>
                <Col lg={3}>  <div class="item">
                          
                           
                          <div class="man_img">
                          <img src={Black} alt="" />
                        

                            <div class="man_over">
                            <FaFacebook />
                            <FaTwitterSquare />
                            <FaInstagramSquare />
                            </div>

                          

                          </div>
                          <h4>John Smith</h4>
                          <p>CEO</p>
                        </div></Col>
                <Col lg={3}>  <div class="item">
                          
                           
                          <div class="man_img">
                          <img src={Blond} alt="" />
                        

                            <div class="man_over">
                            <FaFacebook />
                            <FaTwitterSquare />
                            <FaInstagramSquare />
                            </div>

                          

                          </div>
                          <h4>John Smith</h4>
                          <p>CEO</p>
                        </div></Col>
                
                </Row>
        </Container>
    </section>
    </>
  )
}

export default Meet