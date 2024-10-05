/**
 * File name: Contact.js
 * Student's Name: Lenard Alexis Martinez
 * Student ID: 301409210
 * Date: 05/23/24
 */

/**
Note: classNames such as [main, d-grid, justify-content-center, align-items-center,
align-content-center, text-center, mx-[i], my-[i] commonly used in pages. 
These are Bootstrap classes and utilities that enhance convenience.
 */

import React from "react";
import Navbar from "../components/Navbar";
import contact_me from "../images/contact_me_4.png";
import Image from "react-bootstrap/Image";

const Contact = () => {
  return (
    <>
      <div className="row mt-0">
        <Navbar />
      </div>
      <div className="header-wrapper">
        <div className="main">
          <div className="container my-5 col-12 d-flex justify-content-start align-items-center align-content-center">
            <div className="col-6 d-flex justify-content-center">
                {/* Image designed for Contact info card */}
              <Image src={contact_me} width="65%" height="80%" />
            </div>
            {/* My temporary address in gmaps */}
            <div className="col-6">
              <iframe
                title="Google Map"
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0849550442385!2d-79.17980691183547!3d43.79185016893649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da3fa1e6cd17%3A0x43f3cd1d3b8ababa!2s46%20Fishery%20Rd%2C%20Scarborough%2C%20ON%20M1C%203R7!5e0!3m2!1sen!2sca!4v1716440942163!5m2!1sen!2sca"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
