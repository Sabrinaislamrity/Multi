import React from 'react'
import "./faq.css"
import { Container,Row,Col } from 'react-bootstrap'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
const Faq = () => {
  return (
    <>
    <section id='faq'>
        <Container>
            
            <Row>
            <div className='ok2'>
                <Col lg={3}>
                <div className="faq_left_side">
            <h3 className="heading">Frequently asked questions</h3>
            <a href="#">Contact us for more info</a>
          </div>

                </Col>

                <Col lg={8}>


           
             <div className='ok3 question_iteam faq_question'>
             <Row>
                    <Col lg={1}>
                    <span>01</span>
                   </Col>

              <Col lg={9}>
              <h4>How much time does it take?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </Col>

                <Col lg={1}>
                <RxCross2 />
                </Col>
                    </Row>
                
                </div>

                <div className='ok4 question_iteam faq_question2'>

                    
                <Row>
                    <Col lg={1}>
                    <span>02</span>
                   </Col>

              <Col lg={9}>
              <h4>What is your class naming convention?</h4>
                
                </Col>

                <Col lg={1}>
                <FaPlus />
                </Col>
                    </Row>
                
                </div>
             
                    


                    <div className='ok5 question_iteam faq_question3'>
                    <Row>
                    <Col lg={1}>
                    <span>03</span>
                   </Col>

              <Col lg={9}>
              <h4>How do you communicate?</h4>
                
                </Col>

                <Col lg={1}>
                <FaPlus />
                </Col>
                    </Row>
                
                </div>

                <div className='ok6 question_iteam faq_question4'>
                    

                <Row>
                    <Col lg={1}>
                    <span>04</span>
                   </Col>

              <Col lg={9}>
              <h4>I have a bigger project. Can you handle it?</h4>
                
                </Col>

                <Col lg={1}>
                <FaPlus />
                </Col>
                    </Row>
                
             </div>


        

                    <div className='ok7 question_iteam faq_question5'>
                    <Row>
                    <Col lg={1}>
                    <span>05</span>
                   </Col>

              <Col lg={9}>
              <h4>What is your class naming convention?</h4>
                
                </Col>

                <Col lg={1}>
                <FaPlus />
                </Col>
                    </Row>
                
             </div>


            

                </Col>

                </div>
                
            </Row>
            
        </Container>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Faq