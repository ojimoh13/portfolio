/**
 * File name: Homepage.js
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
import { Typewriter, Cursor } from "react-simple-typewriter";
import Card from "react-bootstrap/Card";
import ContactBtn from "../components/ContactBtn";

const Homepage = () => {
  return (
    <>
      <div className="row mt-0">
        {/* Navbar Component for DRY method */}
        <Navbar />
      </div>
      <div className="header-wrapper">
        <div className="main d-grid justify-content-center align-items-center align-content-center text-center ">
          <h1 className="mt-2 homepage-h1">
            <b> Welcome to LM ProGenius Consulting </b>
          </h1>
          <br />
          <h1 className="homepage-h1">"Where IT Meets Innovation"</h1>

          {/* React simple-typewriter package effect */}
          <h3 className="homepage-h3">
            Offering Professional
            <br />
            <Typewriter
              words={[
                " Web Development",
                "IT Technical Support",
                "Network Infrastracture Services",
              ]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            {/* Cursor effect */}
            <Cursor cursorStyle="<" />
            {/* End Cursor effect */}
          </h3>
          {/* End React simple typewriter effect */}

          <br />

          {/* ContactBtn Component for DRY method */}
          <ContactBtn />

          {/* Cards from React-Bootstrap */}
          <div className="card-mission">
            <Card className="mt-5">
              <Card.Header>
                {" "}
                <h2 className="homepage-h2"> Our Purpose </h2>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    To bridge the gap between technology and business by
                    offering <br /> top-notch IT services that meet our clients'
                    unique needs.
                  </p>
                  {/* <footer className="blockquote-footer">
                    Lenard Martinez <br />
                    <cite title="Source Title">Founder/CEO of LM IT Consulting </cite>
                  </footer> */}
                </blockquote>
              </Card.Body>
            </Card>
          </div>
          {/* End of Cards from React-Bootstrap */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
