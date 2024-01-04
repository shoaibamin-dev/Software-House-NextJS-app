import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Hero from '../components/request/Hero'
import QuoteOptions from '../components/request/QuoteOptions.js'



const Request = ({ Component, pageProps }) => {
    return <div>

        <Hero />
        <QuoteOptions />


    </div>
}

export default Request
