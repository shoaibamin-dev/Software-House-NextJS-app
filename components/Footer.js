import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faAddressBook, faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'



const Footer = () => (
    <div className={footerStyles.footer + " pb-1"}>

        <div className={footerStyles.content + " mt-1"}>
            <Row className={footerStyles.row + " py-4"}>

                <Col sm="12" md="3" xs="12" className={footerStyles.content_parent}>
                    <div >
                        <Image src="/images/logo/logo-png2.png" width="225" height="150" />
                        <h6 className={footerStyles.content_description}>Soladd is a Software Company based in USA that believes in providing the best solutions to every IT related query. Our ultimate goal is to satisfy the client by giving him/her the best solutions possible.</h6>
                    </div>
                </Col>
                <Col sm="12" md="3" xs="12" className={footerStyles.links_container}>
                    <h2 className={footerStyles.useful_links}>
                        Useful Links
                    </h2>

                    <ul className="mt-4">
                        <li>
                            Web Development
                        </li>

                        <li>
                            Mobile Apps
                        </li>

                        <li>
                            Domain & Hosting
                        </li>

                        <li>
                            Ecommerce
                        </li>

                        <li>
                            SEO
                        </li>
                    </ul>

                </Col>

                <Col sm="12" md="3" xs="12" className={footerStyles.links_container}>
                    <h2 className={footerStyles.useful_links}>
                        Newsletter
                    </h2>
                    <div className="mt-4">
                        <p >
                            Subscribe to get Latest News, Offers, and connect with Us.
                        </p>
                        <FormGroup className="w-75">
                            <Input className={footerStyles.subscribe_input + " border-0 rounded-0 p-3"} type="email" name="Subscribe" placeholder="john@doe.com" />
                            <Button color="secondary border-0 rounded-0  d-block mt-3">Subscribe</Button>
                        </FormGroup>
                    </div>



                </Col>
                <Col sm="12" md="3" xs="12" className={footerStyles.links_container}>
                    <h2 className={footerStyles.useful_links}>
                        Contact Us
                    </h2>

                    <ul className={footerStyles.address_section + " p-3"}>
                        <li>
                            <FontAwesomeIcon icon={faAddressBook} />&nbsp;&nbsp; Ridgemont Court, Reynoldsburg Ohio 43068
                        </li>

                        <li className="mt-2">
                            <a type="tel" id="phone" name="phone" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; (616) 953-6133</a>
                        </li>

                        <li className="mt-2">
                            <a href="mailto:info@soladd.com"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp; soladd20@gmail.com</a>
                        </li>



                    </ul>


                </Col>


            </Row>

        </div>
        <p className={footerStyles.copyright + " pt-3 mt-1"}>
            Copyright &copy; 2021 All rights reserved by Soladd
        </p>


    </div >
)

export default Footer;

