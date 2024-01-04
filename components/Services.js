import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import servicesStyles from '../styles/Services.module.css'


const Services = () => (
    <div className={servicesStyles.services + " pb-4"}>

        <div className={servicesStyles.header + " py-5"}>

            <Image src="/images/left-stripe.png" alt="me" width="250" height="50" />
            <br />
            <h1 className="my-3">Services</h1>
            <h2>We Provide Best Quality Services</h2>

        </div>

        <div className={servicesStyles.content + " mt-5"}>
            <Container >
                <Row >
                    <Col sm="6" md="4" xs="4">
                        <Image src="/images/custom-web-design.png" alt="me" width="200" height="200" />
                        <h3>
                            Custom Web Design and Development
                        </h3>
                    </Col>
                    <Col sm="6" md="4" xs="4">
                        <Image src="/images/mobile-development.png" alt="me" width="200" height="200" />
                        <h3>
                            Mobile App Development
                        </h3>
                    </Col>

                    <Col sm="6" md="4" xs="4">
                        <Image src="/images/ecommerce.png" alt="me" width="200" height="200" />
                        <h3>
                            Ecommerce
                        </h3>
                    </Col>

                    <Col className="my-4" sm="6" md="4" xs="4">
                        <Image src="/images/seo.png" alt="me" width="200" height="200" />
                        <h3>
                            Search Engine Optimization
                        </h3>
                    </Col>

                    <Col className="my-4" sm="6" md="4" xs="4">
                        <Image src="/images/web-hosting.png" alt="me" width="200" height="200" />
                        <h3>
                            Web Domain and Hosting
                        </h3>
                    </Col>

                    <Col className="my-4" sm="6" md="4" xs="4">
                        <Image src="/images/desktop-application.png" alt="me" width="200" height="200" />
                        <h3>
                            Desktop Application
                        </h3>
                    </Col>

                </Row>

            </Container>

        </div>
    </div>
)

export default Services;

