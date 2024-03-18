import React from 'react'
import "./steller.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";



const Steller = () => {
  return (
   <>
   <section>
    <Container>
        <Row>
            <Col lg={6}>
            <div className="steller_img">
               
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>


            </Col>

           



            <Col lg={6}>
            <div class="blue_img">
              <h3>Send inquiry</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <form action="" class="table">
                <input type="text" name="name" placeholder="Your name" class="contact" required=""/>
                <input type="email" name="email" placeholder="email" class="contact" required=""/>
                <input type="figma" name="figma" placeholder="Paste your Figma design URL" class="contact_figma" required=""/>
                <button type="submit">Send an Inquiry</button>
                <a class="btn_touch" href="#"
                  >Get in touch with us<FaArrowRightLong />
                </a>
              </form>
            </div>


            </Col>


















        </Row>
    </Container>
   </section>
   
   
   
   
   
   
   </>
  )
}

export default Steller