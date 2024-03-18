import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Logo from "../../assets/logo 1.png"
import "./last.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Last = () => {
  return (
    <>
    <section id='footer'>
        <Container>
            <Row>
                <Col lg={5}>
                <div class="footer_left">
                <img src={Logo} alt=""/>
                <p>We are always open to discuss your project and improve your online presence.</p>
              </div>
              <div class="footer_bottom">
                <div class="bottom_left">
                  <h5>Email me at</h5>
                  <a href="mailto:#">contact@website.com</a>
                </div>
                <div class="bottom_right">
                  <h5>Call us</h5>
                  <a href="tel:+">0927 6277 28525</a>
                </div>
              </div>
                </Col>



                <Col lg={{span:4, offset: 1}}>
                <div class="footer_right">
                <h3>Lets Talk!</h3>
                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <div class="social-links">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitterSquare /></a>
                  <a href="#"><FaInstagramSquare /></a>
                  <a href="#"><FaInstagramSquare /></a>
                </div>
              </div>
                </Col>
            </Row>
        </Container>
        
    </section>
    </>
  )
}

export default Last