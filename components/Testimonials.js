import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import Carousel, { WithStyles } from 'react-multi-carousel';
import StarRatings from 'react-star-ratings';
import 'react-multi-carousel/lib/styles.css';
import workingStyles from '../styles/Testimonials.module.css'
import { Pricing } from "react-pricing";



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Testimonials = () => (

    <div className={workingStyles.testimonials + " pb-4"}>
        <Container>
            <div className={workingStyles.header + " py-5"}>


                <h1 className="my-3">What People Say About Us</h1>

            </div>

            <div className={workingStyles.content}>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    // autoPlay={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={2000}
                    keyBoardControl={true}
                    showDots
                    arrows={false}
                    keyBoardControl
                    focusOnSelect={true}
                    transitionDuration={500}
                    containerClass="carousel-container py-5"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}

                    itemClass={workingStyles.carousel_item}

                >
                    <div className={workingStyles.image_wrapper}>


                        <StarRatings
                            rating={4.5}
                            starRatedColor="#ffee00"
                            numberOfStars={5}
                            starDimension="35px"
                            name='testimonials'
                            starSpacing="2px"
                        />

                        <Row className="pt-5 pb-2">

                            <Col md="4" >
                                <Image src="/images/users/1.jpg" width="150" height="150" />
                            </Col>
                            <Col md="8" className="review">
                                <h3>Madhav Pokhrel</h3>
                                <h5 className={workingStyles.review}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </h5>
                            </Col>
                        </Row>


                    </div>

                    <div className={workingStyles.image_wrapper}>


                        <StarRatings
                            rating={5}
                            starRatedColor="#ffee00"
                            numberOfStars={5}
                            starDimension="35px"
                            name='testimonials'
                            starSpacing="2px"
                        />

                        <Row className="pt-5 pb-2">

                            <Col md="4" >
                                <Image src="/images/users/2.jpg" width="150" height="150" />
                            </Col>
                            <Col md="8" className="review">
                                <h3>John Doe</h3>
                                <h5 className={workingStyles.review}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </h5>
                            </Col>
                        </Row>


                    </div>

                    <div className={workingStyles.image_wrapper}>


                        <StarRatings
                            rating={5}
                            starRatedColor="#ffee00"
                            numberOfStars={5}
                            starDimension="35px"
                            name='testimonials'
                            starSpacing="2px"
                        />

                        <Row className="pt-5 pb-2">

                            <Col md="4" >
                                <Image src="/images/users/3.jpg" width="150" height="150" />
                            </Col>
                            <Col md="8" className="review">
                                <h3>John Doe</h3>
                                <h5 className={workingStyles.review}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </h5>
                            </Col>
                        </Row>



                    </div>

                    <div className={workingStyles.image_wrapper}>


                        <StarRatings
                            rating={5}
                            starRatedColor="#ffee00"
                            numberOfStars={5}
                            starDimension="35px"
                            name='testimonials'
                            starSpacing="2px"
                        />

                        <Row className="pt-5 pb-2">

                            <Col md="4" >
                                <Image src="/images/users/4.jpg" width="150" height="150" />
                            </Col>
                            <Col md="8" className="review">
                                <h3>John Doe</h3>
                                <h5 className={workingStyles.review}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </h5>
                            </Col>
                        </Row>


                    </div>


                </Carousel>
            </div>





        </Container>
    </div >

)



export default Testimonials;

