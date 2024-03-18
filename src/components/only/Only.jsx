import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./only.css"
import Logos from "../../assets/Logos.png"
import Logo2 from "../../assets/Logo2.png"
import Logo3 from "../../assets/Logo3.png"
import Logo4 from "../../assets/Logo4.png"
import Logo5 from "../../assets/Logo5.png"
const Only = () => {
  return (
    <>
    <section>
        <Container>
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

export default Only