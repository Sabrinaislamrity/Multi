import React from 'react'
import "./us.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";


const Us = () => {
  return (
    <>
    <section id='about'>
        <Container>
            <Row>
            <Col lg={5}>
            <div className="work_here">
              <h3>How we work</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="work_btn">
                <a className="get" href="#"
                  >Get in touch with us<FaArrowRightLong /></a>
              </div>
            </div>
            </Col>
            <Col lg={{span:6, offset: 1}}>
                <Row>
                <Col lg={6}>
                <div class="pic-1">
                  
                  <h4>Strategy</h4>
                  <p>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam .
                  </p>
                </div>
                </Col>
                <Col lg={6}>
                <div class="pic-2">
                
                <h4>Wireframing</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
                </Col>
                <Col lg={6}>
                <div class="pic-3">
                
                <h4>Design</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
                </Col>
                <Col lg={6}>
                <div class="pic-4">
                
                <h4>Development</h4>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>
              </div>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    </section>
    
    
    
    </>








  )
}

export default Us