/**
 * File name: About.js
 * Student's Name: Lenard Alexis Martinez
 * Student ID: 301409210
 * Date: 05/22/24
 */

/**
Note: classNames such as [main, d-grid, justify-content-center, align-items-center,
align-content-center, text-center, mx-[i], my-[i] commonly used in pages. 
These are Bootstrap classes and utilities that enhance convenience.
 */

import React from "react";
import Navbar from "../components/Navbar";
import Figure from "react-bootstrap/Figure";
import my_img from "../images/my_image/image_final.png";
import about_me from "../images/my_image/about_me_desc.png";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <>
      <div className="row mt-0">
        <Navbar />
      </div>
      <div className="header-wrapper">
        <div className="main">
          <div className="container my-5 col-12 d-flex justify-content-between align-items-center align-content-center">
            <div className="col-8 ml-5">
              {/* Image i designed for description of myself */}
              <Image
                src={about_me}
                width="100%"
                height="100%"
                className="mt-3"
              />
            </div>
            <div className="col-4">
              {/* Figure component from React-Bootstrap for MyImage */}
              <Figure className="mx-5">
                <Figure.Image
                  width={320}
                  height={280}
                  alt="171x180"
                  src={my_img}
                />
              </Figure>
              {/* End of Figure component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
