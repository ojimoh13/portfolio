/**
 * File name: ContactBtn.js
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
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Contact me button component
const ContactBtn = () => {
  return (
    <>
      <Link to={"/contact"} className="nav-link">
        <Button variant="warning" size="lg" className="mt-3">
          {/* nbsp for space */}
          Click&nbsp;<u>here</u> to reach out for a consultation and let's
          transform your IT infrastructure.
        </Button>
      </Link>
    </>
  );
};

export default ContactBtn;
