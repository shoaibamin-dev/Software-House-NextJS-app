import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Hero from '../components/about/Hero'
import WhyChooseUs from '../components/about/WhyChooseUs'
import OurLatestProjects from '../components/OurLatestProjects'



const About = ({ Component, pageProps }) => {
    return <div>

        <Hero />
        <WhyChooseUs />
        <OurLatestProjects />


    </div>
}

export default About
