import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import workingStyles from '../styles/Working.module.css'


const Working = () => (
    <div className={workingStyles.working + " pb-4"}>

        <div className={workingStyles.header + " py-5"}>

            <Image src="/images/left-stripe.png" alt="me" width="250" height="50" />

            <h1 className="my-3">How It Works</h1>

        </div>

        <div className={workingStyles.content + " mt-5"}>
            <Container >
                <Row >
                    <Col sm="12" md="7" xs="12">
                        <Image src="/images/working.PNG" alt="me" width="1000" height="600" />
                    </Col>
                    <Col sm="12" md="5" xs="12" className={workingStyles.content_parent}>
                        <h3 >
                            We aspire to enhance the productivity and growth of organizations around the world with a comprehensive range of digital solutions and services.
                        </h3>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
)

export default Working;

