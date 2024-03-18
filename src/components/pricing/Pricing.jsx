import React from 'react'
import "./pricing.css"
import { Container,Row,Col } from 'react-bootstrap'
import Icon from "../../assets/Icon.png"
import Icone from "../../assets/Icone.png"
import Iconee from "../../assets/Iconee.png"
import Logos from "../../assets/Logos.png"
import Logo2 from "../../assets/Logo2.png"
import Logo3 from "../../assets/Logo3.png"
import Logo4 from "../../assets/Logo4.png"
import Logo5 from "../../assets/Logo5.png"


const Pricing = () => {
  return (
    <>
    <section id='design'>
        <Container>
            <Row>
            <Col lg={12}>
                <div className="design_text">
              <h3>The benefits of working with us</h3>
            </div>
                </Col>
            </Row>
            <Row>
            <Col lg={4}>
               <div className='card_items'>
               <img src={Icon} alt="" />
            <h4>Customize with ease</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
                <Col lg={4}>
               <div className='card_items'>
               <img src={Icone} alt="" />
            <h4>Customize with ease</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
                <Col lg={4}>
               <div className='card_items'>
               <img src={Iconee} alt="" />
            <h4>Customize with ease</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
            </Row>
            <Row>
              <div className='logo_section'>
                <Col lg={2}>
                <div class="feature_card_two">
                                <h4>100.000+</h4>
                                <p>Finsweet Users</p>
                            </div>
                            
                </Col>

                <Col lg={2}>
                <div class="feature_card_two">
                  <img src={Logos} alt="" />
                              
                            </div>
                            
                </Col>

                <Col lg={2}>
                <div class="feature_card_two">
                               <img src={Logo2} alt="" />
                            </div>
                            
                </Col>

                <Col lg={2}>
                <div class="feature_card_two">
                               <img src={Logo3} alt="" />
                            </div>
                            
                </Col>

                <Col lg={2}>
                <div class="feature_card_two">
                <img src={Logo4} alt="" />
                            </div>
                            
                </Col>

                <Col lg={2}>
                <div class="feature_card_two">
                <img src={Logo5} alt="" />
                            </div>
                            
                </Col>
              </div>
            </Row>

            
            
        </Container>









    </section>
    </>
  )
}

export default Pricing