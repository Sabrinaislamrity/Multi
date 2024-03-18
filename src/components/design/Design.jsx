import React from 'react'
import "./design.css"
import { Container,Row,Col } from 'react-bootstrap'
import Icon from "../../assets/Icon.png"
import Icone from "../../assets/Icone.png"
import Iconee from "../../assets/Iconee.png"
import Iconn from "../../assets/Iconn.png"
import Iconnn from "../../assets/Iconnn.png"
import Icoon from "../../assets/Icoon.png"

const Design = () => {
  return (
    <>
    <section id='design'>
        <Container>
            <Row>
            <Col lg={12}>
                <div className="design_text">
              <h5>features</h5>
              <h3>Design that solves problems, one product at a time</h3>
            </div>
                </Col>
            </Row>
            <Row>
            <Col lg={4}>
               <div className='card_items'>
               <img src={Icon} alt="" />
            <h4>Uses Client First</h4>
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
            <h4>Uses Client First</h4>
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
            <h4>Uses Client First</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
            </Row>

            <Row>
            <Col lg={4}>
               <div className='card_items'>
               <img src={Iconn} alt="" />
            <h4>Uses Client First</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
                <Col lg={4}>
               <div className='card_items'>
               <img src={Iconnn} alt="" />
            <h4>Uses Client First</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi
            </p>
               </div>

                </Col>
                <Col lg={4}>
               <div className='card_items'>
               <img src={Icoon} alt="" />
            <h4>Uses Client First</h4>
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

export default Design