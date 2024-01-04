import React from 'react'
import { Container, Col, Row, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import styles from '../../styles/QuoteOptions.module.css'


const QuoteOptions = () => {
    return (
        <div className="py-3">
            <Form>
                <Container>

                    <Row form className="w-75 mx-auto">
                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "  my-sm-2 my-md-0"}>
                                <Input type="text" name="Name" id="Name" placeholder="Name:" />
                            </FormGroup>
                        </Col>
                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "   my-sm-2 my-md-0"}>
                                < Input type="text" name="Email" id="Email" placeholder="Email:" />
                            </FormGroup>
                        </Col>

                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "  my-sm-2 my-md-0"}>
                                <Input type="text" name="Contact" id="Contact" placeholder="Contact Number:" />
                            </FormGroup>
                        </Col>
                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "   my-sm-2 my-md-0"}>
                                < Input type="text" name="Country" id="Country" placeholder="Country Name:" />
                            </FormGroup>
                        </Col>

                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "  my-sm-2 my-md-0"}>
                                <Input type="text" name="ApproximateBudget" id="ApproximateBudget" placeholder="Approximate Budget:" />
                            </FormGroup>
                        </Col>
                        <Col md={6} lg={6} sm={12} className="my-2 d-inline-block">
                            <FormGroup className={styles.formgroup + "   my-sm-2 my-md-0"}>
                                < Input type="text" name="OtherContact" id="OtherContact" placeholder="Skype ID / Whatsapp Number:" />
                            </FormGroup>
                        </Col>


                    </Row>

                    <div className="my-3">
                        <h3>Select your choices:</h3>

                        <Container>
                            <Row className="my-3">

                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Website Design
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Web Domain and Hosting
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Graphic Designing and Branding
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            SEO and Google Analytics
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Content Marketing Services
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Increasing Sales
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            E-commerce
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            The Next Big Things
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Build Loyalty For Your Brand
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Custom E-commerce Website
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Check me out
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            CMS - Content Management Systems
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Email Promotion and Newsletters
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Desktop Applicaton Development
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Enterprise Applicaton Development
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Mobile Applicaton Development
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Wireframe and Mockup Designs
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            SaaS - Software as a Service Solutions
                                        </Label>
                                    </FormGroup>
                                </Col> <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Middleware and ETL
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <FormGroup className={styles.checkboxoptions} check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            LMS - Learning Management Systems
                                        </Label>
                                    </FormGroup>
                                </Col>



                            </Row>
                        </Container>

                        <FormGroup className={styles.formgroup}>
                            <Input rows={3} type="textarea" name="ProjectDescription" id="ProjectDescription" placeholder="Project Description:"
                            />
                        </FormGroup>

                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>Attach Files</Label>

                            <Input multiple accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" type="file" name="file" id="files" />
                            <FormText color="muted">
                                <span className="text-danger">** Only doc, docx, xls, xlsx, ppt, ptpx, pdf, rtf, and txt files are allowed. **</span>
                            </FormText>

                        </FormGroup>


                        <FormGroup className={styles.checkboxoptions + " my-3"} check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Send me a copy of NDA (Non Disclosure Agreement)
                            </Label>
                        </FormGroup>

                        <Button color="success" className={styles.submitbutton + "custombtn px-5 py-3 d-block my-4 mx-auto"}><b>Submit Form</b></Button>

                    </div>
                </Container>
            </Form>

        </div>
    )
}

export default QuoteOptions
