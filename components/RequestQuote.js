import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import workingStyles from '../styles/RequestQuote.module.css'
import Link from 'next/link'


const RequestQuote = () => (
    <div className={workingStyles.request_quote}>


        <div className={workingStyles.content + " mt-5"}>
            <Row className={workingStyles.row}>

                <Col sm="12" md="8" xs="12" className={workingStyles.content_parent}>
                    <h1 >
                        Let's Work Together
                    </h1>
                </Col>
                <Col sm="12" md="4" xs="12">
                    <Link href="/request"><button>Request A Quote</button></Link>
                </Col>
            </Row>

        </div>
    </div>
)

export default RequestQuote;

