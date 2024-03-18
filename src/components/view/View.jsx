import React from 'react'
import "./view.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Muhila from "../../assets/Muhila.png"
import Work from "../../assets/Work.png"
import Women from "../../assets/Women.png"
const View = () => {
  return (
    <>
    <section id='view'>
    <Container>
        <Row>
        <Col lg={4}>
        <div className="expect">
              <h3>View our projects</h3>
            </div>
        </Col>
        <Col lg={{span:2, offset: 6}}>
        <div className="extend">
              <h5>View More<FaArrowRightLong /></h5>
            </div>

        </Col>
        </Row>
        <Row>
        <Col lg={8}>
        <div class="expect_img">
              <img src={Muhila} alt="" />
              <div class="view_left_text">
                <h4>Workhub office Webflow Webflow Design</h4>
                <a href="#">View project<FaArrowRightLong /></a>
              </div>
            </div>
        </Col>
        <Col lg={4}>
        <div class="expect_img2">
              <img src={Work} alt="" />
              <div class="view_left_text2">
                <h4>Unisaas Website Design</h4>
                <a href="#">View portfolio<FaArrowRightLong /></a>
              </div>
            </div>
            <div class="expect_img3">
              <img src={Women} alt="" />
            </div>
        </Col>


        </Row>
    </Container>
    </section>
    </>
  )
}

export default View