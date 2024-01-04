import React from 'react'
import { Button } from 'reactstrap';
import heroStyles from '../../styles/Hero.module.css'
import Link from 'next/link'

const Hero = () => {
    return (

        <div className={heroStyles.heroImage}>
            <div className={heroStyles.heroText}>
                <h1 className="my-3">Company Overview</h1>
                <h2 className="my-3"><b>Where Innovation Meets Experience</b></h2>
                <Link href="/request"><Button color="secondary" className=" btn-lg px-4 py-3 border-0 rounded-0 d-block my-4"><b>Request A Quote</b></Button></Link>
            </div>
        </div>

    )
}

export default Hero
