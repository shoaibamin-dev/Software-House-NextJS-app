import headerStyles from '../styles/Header.module.css'
import Carousel from './Carousel'
import Services from './Services'
import Working from './Working'
import OurLatestProjects from './OurLatestProjects'
import OurSuccess from './OurSuccess'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import RequestQuote from './RequestQuote'

const Home = () => {


  return (
    <div className="w-100">
      <Carousel />
      <Services />
      <Working />
      <OurLatestProjects />
      <OurSuccess />
      <Testimonials />
      <Pricing />
      <RequestQuote />
    </div>
  )
}

export default Home
