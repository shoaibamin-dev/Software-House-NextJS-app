import React from 'react'
import { Button } from 'reactstrap';
import heroStyles from '../../styles/HeroPricing.module.css'
import Link from 'next/link'

const Hero = () => {
    return (

        <div className={heroStyles.heroImage}>
            <div className={heroStyles.heroText + " py-5"}>
                <h1 ><b>Get The Ideal Plans For Your Projects</b></h1>
                <Link href="/request"><Button color="secondary" className="my-4 px-4 py-3 border-0 d-block "><b>Request A Quote</b></Button></Link>
            </div>
        </div>

    )
}

export default Hero
