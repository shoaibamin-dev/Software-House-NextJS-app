import React from 'react'
import styles from '../../styles/MapsIframe.module.css'


const MapsIframe = () => {
    return (

        <div className={styles.parent}>
            <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=916%20Mahle%20Drive+(Solad%20LLC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

    )
}

export default MapsIframe
