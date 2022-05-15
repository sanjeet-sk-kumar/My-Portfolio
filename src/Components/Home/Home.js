import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import Button from "../Common/Button/Button";
import AnimateLetters from "../Common/AnimateLetters/AnimateLetters";
import "./Home.scss";
import tagCanvas from "tag-canvas";
// import TagCanvas from "jquery-tagcanvas";
import MagicWallItem from "../Common/MagicWallItem/MagicWallItem";
import logoS from "../../assets/images/s.png";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

const About = React.lazy(() => import("../About/About"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["a", "n", "j", "e", "e", "t", ","];
  const myPortfolio = [
    "M",
    "y",
    " ",
    "P",
    "o",
    "r",
    "t",
    "f",
    "o",
    "l",
    "i",
    "o",
  ];
  const techStack = [
    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Unit Test",
    "React",
    "JSON",
    "ES5",
    "React Router",
    "Redux",
    "Data Structure",
    "REST",
    "Node JS",
    "npm",
    "Bootstrap",
  ];
  const roleNameArray = [
    "w",
    "e",
    "b",
    " ",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    setTimeout(() => setLetterClass("text-animate-hover"), 4000);
  }, []);
  return (
    <>
      <section id="section-home" className="section-home section-full">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>{" "}
            <img src={logoS} alt="Sanjeet" />
            <AnimateLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimateLetters
              letterClass={letterClass}
              strArray={roleNameArray}
              idx={24}
            />
          </h1>
          <p className="gray-text">
            Front End Developer / Javascript Enthusiast
          </p>
          <br />
          <Button to="/contact" text="Contact Me" />
        </div>
        {/* <div className="scroll-down scroll-down-left">
          <span>scroll down</span>
          <FaArrowDown className="fas" />
        </div>
        <div className="scroll-down">
          <span>scroll down</span>
          <FaArrowDown className="fas" />
        </div> */}
      </section>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Skills />
        <Work />
        <Contact />
      </Suspense> */}
    </>
  );
};

export default Home;
