import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


import Home from '../components/header'


const MyApp = ({ Component, pageProps }) => {
    return <Home />
}

export default MyApp
