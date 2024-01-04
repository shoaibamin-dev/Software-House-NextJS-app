import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import Layout from '../components/Layout'
import '../styles/globals.css'

import Footer from '../components/Footer';


const MyApp = ({ Component, pageProps }) => {
  return <Layout>

    <Component {...pageProps} />

    <Footer />


  </Layout>


}

export default MyApp
