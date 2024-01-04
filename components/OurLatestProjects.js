import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import Carousel, { WithStyles } from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import workingStyles from '../styles/OurLatestProjects.module.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const OurLatestProjects = () => (
    <div className={workingStyles.projects + " pb-4"}>

        <div className={workingStyles.header + " py-5"}>

            <Image src="/images/left-stripe.png" alt="me" width="250" height="50" />

            <h1 className="my-3">Our Latest Projects</h1>

        </div>

        <div className={workingStyles.content + " mt-5"}>
            <Carousel
                swipeable={true}
                draggable={true}
                // autoPlay={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                arrows
                keyBoardControl
                focusOnSelect={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                itemClass={workingStyles.carousel_item}

            >
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/1.jpg" width="350" height="300" />

                </div>
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/2.jpg" width="350" height="300" />

                </div>
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/3.jpg" width="350" height="300" />

                </div>
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/4.jpg" width="350" height="300" />

                </div>
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/5.jpg" width="350" height="300" />

                </div>
                <div className={workingStyles.image_wrapper}>
                    <Image src="/images/projects/6.jpg" width="350" height="300" />

                </div>
            </Carousel>
        </div>
    </div >
)

export default OurLatestProjects;

