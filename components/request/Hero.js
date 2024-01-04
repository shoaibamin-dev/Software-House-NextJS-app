import React from 'react'
import { Button } from 'reactstrap';
import heroStyles from '../../styles/HeroRequest.module.css'

const Hero = () => {
    return (

        <div className={heroStyles.heroImage}>
            <div className={heroStyles.heroText}>
                <h2 className="mt-4 my-1">Have A Project?</h2>
                <h1 className="my-1"><b>Send Us A Quote</b></h1>
            </div>
        </div>

    )
}

export default Hero
