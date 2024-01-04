import React from 'react'
import styles from '../../styles/WhyChooseUs.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image'
import Link from 'next/link'

const WhyChooseUs = () => {
    return (
        <div className="p-4">

            <section>


                <h1 className={styles.h1}><FontAwesomeIcon icon={faLongArrowAltRight} /> Why Choose Us</h1>
                <Container>

                    <Row>
                        <Col md="6" xl="4" sm="12" className="text-center">
                            <Image src="/images/about/market.PNG" width="180" height="180" />
                            <h2 className={styles.h2}>Market Research</h2>

                            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </Col>

                        <Col md="6" xl="4" sm="12" className="text-center">
                            <Image src="/images/about/discovery.PNG" width="180" height="180" />
                            <h2 className={styles.h2}>Discovery</h2>

                            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </Col>

                        <Col md="6" xl="4" sm="12" className="text-center">
                            <Image src="/images/about/plan.PNG" width="180" height="180" />
                            <h2 className={styles.h2}>Plan</h2>

                            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </Col>

                        <Col md="6" xl="4" sm="12" className="text-center">
                            <Image src="/images/about/execute.PNG" width="180" height="180" />
                            <h2 className={styles.h2}>Execute</h2>

                            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </Col>

                        <Col md="6" xl="4" sm="12" className="text-center my-2">
                            <Image src="/images/about/deliver.PNG" width="180" height="180" />
                            <h2 className={styles.h2}>Deliver</h2>

                            <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </Col>
                    </Row>

                </Container>
            </section>

            <section>
                <h1 className={styles.h1}><FontAwesomeIcon icon={faLongArrowAltRight} /> Who We Are?</h1>
                <p className={styles.paragraph}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

            </section>

            <section>
                <h1 className={styles.h1}><FontAwesomeIcon icon={faLongArrowAltRight} /> We Believe</h1>
                <p className={styles.paragraph}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

            </section>

            <section>
                <h1 className={styles.h1}><FontAwesomeIcon icon={faLongArrowAltRight} /> Our Mission</h1>
                <p className={styles.paragraph}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

            </section>

            <section>
                <h1 className={styles.h1}><FontAwesomeIcon icon={faLongArrowAltRight} /> Our Vision</h1>
                <p className={styles.paragraph}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

                <Link href="/request"><Button color="success" className="mx-auto d-block btn-lg px-5 py-3 border-0 rounded-0 d-block my-4"><b>Request A Quote</b></Button></Link>

            </section>



        </div>
    )
}

export default WhyChooseUs
