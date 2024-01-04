import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import { Pricing } from "react-pricing";
import pricingStyles from '../styles/Pricing.module.css'


const RPricing = () => (
    <div className={pricingStyles.pricing + " pb-4"}>

        <div className={pricingStyles.header + " py-5"}>

            <Image src="/images/left-stripe.png" alt="me" width="250" height="50" />

            <h1 className="my-4">Pricing</h1>
            <h5 >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>



        </div>

        <div className={pricingStyles.content + " mt-5"}>

            <div className={pricingStyles.pricing_table + " mt-4"}>

                <Pricing

                    data={[
                        { text: "3 new project / month", value: true },
                        { text: "Basic interaction", value: true },
                        { text: "Assets library", value: false },
                    ]}
                    price={7}
                    duration="m"
                    background="linear-gradient(23deg, rgba(71,166,167,1) 8%, rgba(12,53,107,1) 86%)"
                    shadow="#0C356B"
                    currency="$"
                    buttonContent="Get Started"
                    subTitle="For Planned Projects"
                    priceText="Bring your designs to the next level and export them."
                    headerText="free"



                />

                <Pricing

                    data={[
                        { text: "3 new project / month", value: true },
                        { text: "Basic interaction", value: true },
                        { text: "Assets library", value: false },
                    ]}
                    price={7}
                    duration="y"
                    background="linear-gradient(23deg, rgba(71,166,167,1) 8%, rgba(12,53,107,1) 86%)"
                    shadow="#0C356B"
                    currency="$"
                    buttonContent="Get Started"
                    subTitle="For Planned Projects"
                    priceText="Bring your designs to the next level and export them."
                    headerText="free"

                />

                <Pricing

                    data={[
                        { text: "3 new project / month", value: true },
                        { text: "Basic interaction", value: true },
                        { text: "Assets library", value: false },
                    ]}
                    price={7}
                    duration="m"
                    background="linear-gradient(23deg, rgba(71,166,167,1) 8%, rgba(12,53,107,1) 86%)"
                    shadow="#0C356B"
                    currency="$"
                    buttonContent="Get Started"
                    subTitle="For Planned Projects"
                    priceText="Bring your designs to the next level and export them."
                    headerText="free"

                />



            </div>


        </div>
    </div>
)

export default RPricing;

