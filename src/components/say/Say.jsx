import React from 'react'
import "./say.css"
import { Container,Row,Col } from 'react-bootstrap'
import Mask from "../../assets/Mask.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Say = () => {
  return (
    <>
    <section id='client'>

        <Container>
            <Row>
            <Col lg={3}>
            <div className="client_text">
            <h2>What our clients say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
                </Col>
                <Col lg={{span:8, offset: 1}}>
                    
          <div class="client_text_right">
            <h3>
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h3>
            <Row>
            <div class="ok ">
            <Col lg={3}>
                <div class="client_img">
                  <img src={Mask} alt="" />
                  
                    <h4>Jenny Wilson</h4>
                    <p>Vice President</p>
                  </div>
                  </Col>
                  <Col lg={2}>
                  <div class="client_icon">
                  <IoIosArrowBack />
                  <IoIosArrowForward />
                </div>
                </Col>
              </div>
            </Row>
            </div>
                </Col>











            </Row>
        </Container>







    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Say