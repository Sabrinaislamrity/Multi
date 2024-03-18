import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./pro.css"

const Pro = () => {
  return (
   <section>
    <Container>
        <Row>
            <div className='ok9'>
                <Col lg={6}><div className="three-head">
                            <h2>The process we follow</h2>
                        </div></Col>
            </div>
        </Row>
        <Row>
            <div className='three-head'>
                <Col lg={3}>
                <div className="three-one">
                                <div className="head-bar">
                                </div>
                                <h3>Planning</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            </div>
                </Col>

                <Col lg={3}>
                <div className="three-one">
                                <div className="head-bar">
                                </div>
                                <h3>Conception</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            </div>
                </Col>


                <Col lg={3}>
                <div className="three-one">
                                <div className="head-bar">
                                </div>
                                <h3>Design</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            </div>
                </Col>


                <Col lg={3}>
                <div className="three-one">
                                <div className="head-bar">
                                </div>
                                <h3>Development</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            </div>
                </Col>
            </div>
        </Row>
    </Container>
   </section>
  )
}

export default Pro