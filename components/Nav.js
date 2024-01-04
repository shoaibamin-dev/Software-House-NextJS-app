import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faPhone, faBook } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import navStyles from '../styles/Nav.module.css'
import { SocialIcon } from 'react-social-icons';


const CNav = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={navStyles.top_nav}>
        <ul >
          <li>
            <a href="mailto:info@soladd.com"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;info@soladd.com</a>
          </li>
          <li>
            <a type="tel" id="phone" name="phone" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; (616) 953-6133</a>

          </li>
          <li>
            <SocialIcon url="https://facebook.com/" fgColor='white' bgColor='transparent' className={navStyles.social_icon} />
            <SocialIcon url="https://linkedin.com/" fgColor='white' bgColor='transparent' className={navStyles.social_icon} />
            <SocialIcon url="https://instagram.com/" fgColor='white' bgColor='transparent' className={navStyles.social_icon} />
            <SocialIcon url="https://twitter.com/" fgColor='white' bgColor='transparent' className={navStyles.social_icon} />
          </li>
        </ul>

      </nav>

      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand>
            <div>
              <img height="75" width="80" src="/images/logo/logo.png" />
              Globalize your business with our Innovation
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className={navStyles.bottom_nav}>
            <Nav className="mr-auto nav-items" navbar>
              <NavItem>
                <Link href="/home">Home</Link>
              </NavItem>
              <NavItem>
                <Link href="/services">Services</Link>
              </NavItem>
              <NavItem>
                <Link href="/pricing">Pricing</Link>
              </NavItem>
              <NavItem>
                <Link href="/portfolio">Portfolio</Link>
              </NavItem>
              <NavItem>
                <Link href="/about">About Us</Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">Contact Us</Link>
              </NavItem>
              <NavItem>
                <Link href="/request">Request A Quote</Link>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>




    </>


  )
}

export default CNav
