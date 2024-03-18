import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Man from "../../assets/Man.png"
import Oman from "../../assets/Oman.png"
import Apple from "../../assets/Apple.png"
import './blog.css'

const Blog = () => {
  return (
    <>
    <section id='blog'>
        <Container>
            <Row>
                <Col lg={2}>
                <div class="blog_text">
              <h2>Our blog</h2>
            </div>
                </Col>
            </Row>
            <Row>
            <Col lg={4}>
            <div class="blog_items">
            <img src={Man} alt="" />
            <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#"
              >Read More<FaArrowRightLong /></a>
          </div>
            </Col>



            <Col lg={4}>
            <div class="blog_items">
            <img src={Oman} alt="" />
            <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#"
              >Read More<FaArrowRightLong /></a>
          </div>
            </Col>


            <Col lg={4}>
            <div class="blog_items">
            <img src={Apple} alt="" />
            <h6>19 Jan 2022</h6>
            <h3>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h3>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a href="#"
              >Read More<FaArrowRightLong /></a>
          </div>
            </Col>












            </Row>
        </Container>
    </section>
    </>
  )
}

export default Blog