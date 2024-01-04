import React from 'react'
import Image from 'next/image'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from '../../styles/ContactForm.module.css'

const ContactForm = () => {
    return (
        <div className={styles.contactform}>
            <div className={styles.header}>

                <Image src="/images/left-stripe.png" alt="me" width="250" height="50" />

                <h1 className="my-3">Contact Us</h1>

            </div>
            <div className="pb-4">
                <Row>

                    <Col lg={4} md={3} sm={12} className={styles.getquote}>
                        <h2 className={styles.h2}>Get A Quote</h2>
                    </Col>

                    <Col lg={8} md={9} sm={12} className={styles.contactus}>

                        <Container>
                            <p className={styles.paragraph}>Let us know how can we help you.</p>


                            <Form>
                                <Row form >
                                    <Col md={6} lg={6} sm={12} className="d-inline-block">
                                        <FormGroup className={styles.formgroup + "  my-sm-2 my-md-0"}>
                                            <Input type="text" name="Name" id="Name" placeholder="Name:" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6} lg={6} sm={12} className="d-inline-block">
                                        <FormGroup className={styles.formgroup + "   my-sm-2 my-md-0"}>
                                            < Input type="text" name="Email" id="Email" placeholder="Email:" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className={styles.formgroup}>
                                    <Input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="text" name="Contact" id="Contact" placeholder="Contact Number:" />
                                </FormGroup>

                                <FormGroup className={styles.formgroup}>
                                    <Input type="text" name="Subject" id="Subject" placeholder="Subject:" />
                                </FormGroup>

                                <FormGroup className={styles.formgroup}>
                                    <Input type="textarea"
                                        row={3}
                                        name="Messsage" id="Messsage" placeholder="Messsage:"
                                    />
                                </FormGroup>


                                <Button color="secondary" className={styles.submitbutton + "custombtn px-5 py-3 d-block my-4 mx-auto"}><b>Submit Form</b></Button>
                            </Form>

                        </Container>
                    </Col>


                </Row>
            </div>



        </div >
    )
}

export default ContactForm
