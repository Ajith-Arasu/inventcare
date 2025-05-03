import React from "react";

const Footer = () => {
  return (
    <div className="footer">
    <div className="group-6f">
      <span className="menu">Menu</span>
      <div className="flex-row-de">
      <a href="#home" className="home-70">
          Home
        </a>
        <a href="/privacy-policy" className="mission-71">
          Privacy Policy
        </a>
        {/* <span className="home-70">Home</span> */}
        {/* <span className="mission-71">mission</span> */}
      </div>
      <div className="flex-row-b">
      <a href="#about-us" className="about-us-72">
          About Us
        </a>
        {/* <span className="about-us-72">About us</span> */}
        <a href="#products" className="products-73">
          Products
        </a>
        {/* <span className="products-73">products</span> */}
      </div>
      <div className="flex-row-ea">
        <div className="our-pillars-74" />
        <a href="#our-pillars" className="contact-us-75">
          Our Pillars
        </a>
        {/* <span className="contact-us-75">our pillars</span> */}
        <a href="#contact-us" className="flex-row-fbb">
          Contact us  
        </a>
        {/* <span className="flex-row-fbb">contact us</span> */}
        <div className="all-rights-reserved" />
      </div>
      <div className="social-media-icons" />
      <div className="group-26">
        <span className="text-5e">All rights reserved</span>
        <div className="pic-14" />
        <div className="pic-15" />
        <div className="pic-16" />
      </div>
    </div>
  </div>
  );
};

export default Footer;
