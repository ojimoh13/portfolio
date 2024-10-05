/**
 * File name: Services.js
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
import Accordion from "react-bootstrap/Accordion";
import ContactBtn from "../components/ContactBtn";
import it_tech from "../images/it_tech.png";
import web_dev from "../images/web_dev.png";
import network from "../images/network.png";

const Services = () => {
  return (
    <>
      <div className="row mt-0">
        <Navbar />
      </div>
      <div className="header-wrapper">
        <div className="main d-grid justify-content-center align-items-center align-content-center text-center">
          <div>
            {" "}
            <h1 className="mt-2 services-h1"> Offered Services </h1>
          </div>
          {/* Accordion Component from React-Bootstrap for dropdown functions of Services */}
          <div className="accordion-cont">
            <Accordion
              defaultActiveKey="0"
              alwaysOpen
              className="custom-accordion"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <img
                    src={web_dev}
                    alt="Web Development"
                    className="icon"
                  />{" "}
                  Web Development
                </Accordion.Header>
                <Accordion.Body>
                  As a skilled web developer, I specialize in creating
                  customized websites and web applications that align with your
                  unique business goals and vision. From responsive design to
                  intuitive navigation, I ensure that your online presence
                  reflects your brand identity and engages your target audience
                  effectively. With expertise in various technologies and
                  frameworks, I bring your ideas to life with creativity,
                  precision, and attention to detail.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <img
                    src={it_tech}
                    alt="IT
                Technical Support"
                    className="icon"
                  />{" "}
                  IT Technical Support
                </Accordion.Header>
                <Accordion.Body>
                  With extensive experience in IT technical support, I offer
                  comprehensive assistance for all your software and hardware
                  needs. Whether it's troubleshooting software issues, resolving
                  hardware malfunctions, or optimizing system performance, I
                  provide prompt and reliable solutions to keep your operations
                  running smoothly. From desktop support to network
                  configuration, I'm committed to delivering exceptional service
                  and minimizing disruptions to your workflow.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <img
                    src={network}
                    alt="Network Infrastructure Services"
                    className="icon"
                  />
                  Network Infrastructure Services
                </Accordion.Header>
                <Accordion.Body>
                  As a network infrastructure specialist, I design, implement,
                  and maintain robust network architectures to support your
                  business operations. From setting up local area networks
                  (LANs) to configuring wide area networks (WANs), I ensure
                  seamless connectivity and efficient data transfer across your
                  organization. With a focus on security, scalability, and
                  reliability, I provide tailored solutions to meet your
                  specific networking requirements and empower your business
                  with a solid foundation for growth and innovation.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* End of Accordion Component  */}

          {/* ContactBtn Component for DRY method */}
          <ContactBtn />
        </div>
      </div>
    </>
  );
};

export default Services;
