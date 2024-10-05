/**
 * File name: Projects.js
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
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import ecomm from "../images/projects/my_ecomm2.png";
import cms from "../images/projects/my_cms2.png";
import rms from "../images/projects/my_rms2.png";

const Projects = () => {
  return (
    <>
      <div className="row mt-0">
        <Navbar />
      </div>
      <div className="header-wrapper">
        <div className="main">
          <div className="mt-5 carousel-cont container d-grid justify-content-center align-items-center align-content-center text-center">
            <div>
              {" "}
              <h1 className="services-h1"> Featured Projects </h1>
            </div>
            {/* Carousel component from React-Bootstrap to showcase my projects */}
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <Image
                    src={ecomm}
                    width="70%"
                    height="30%"
                    text="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={cms}
                    width="70%"
                    height="30%"
                    text="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={rms}
                    width="70%"
                    height="30%"
                    text="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            {/* End of Carousel component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
