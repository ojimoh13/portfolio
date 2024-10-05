/**
 * File name: App.js
 * Student's Name: Lenard Alexis Martinez
 * Student ID: 301409210
 * Date: 05/22/24

/**
Note: classNames such as [main, d-grid, justify-content-center, align-items-center,
align-content-center, text-center, mx-[i], my-[i] commonly used in pages. 
These are Bootstrap classes and utilities that enhance convenience.
 */

import "./App.css";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  // {
  //   path: "/homepage",
  //   element: <Homepage />,
  // },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>

      {/* <div className="App">
        <Homepage></Homepage>
        <Contact></Contact>
        <br />
      </div> */}
    </>
  );
}

export default App;
