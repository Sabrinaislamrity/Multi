import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./benefit.css"
import Icon from "../../assets/Icon.png"
import Icone from "../../assets/Icone.png"
import Iconee from "../../assets/Iconee.png"

const Benefit = () => {
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
        </Container>
    </section>
    </>
  )
}

export default Benefit