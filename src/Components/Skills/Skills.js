import React from "react";
import Chart from "../Common/Chart/Chart";
import { Link } from "react-router-dom";
import ExperienceCard from "../Common/ExperienceCard/ExperienceCard";
import Paragraph from "../Common/Paragraph/Paragraph";
import "./Skills.scss";
import HeaderTwo from "../Common/HeaderTwo/HeaderTwo";

const Skills = () => {
  return (
    <>
      <div className="page-skills section-full">
        <div className="text-zone">
          <header>
            <HeaderTwo
              aria-label="Skills & Experience"
              fontsize="6.3rem"
              beforeTag={true}
              afterTag={true}
              delay={5}
            >
              Skills & Experience
            </HeaderTwo>
          </header>
          {/* <br /> */}
          <Paragraph fontsize="1.3rem" beforeTag={true} afterTag={false}>
            Expert in front-end development including technologies like{" "}
            <span className="tech-tag">HTML5</span>
            {", "}
            <span className="tech-tag">CSS3</span>
            {", "}
            <span className="tech-tag">Javascript</span>
            {", "}
            <span className="tech-tag">JQuery</span>
            {", "}
            <span className="tech-tag">React</span>
            {", "}
            <span className="tech-tag">Git</span>
            {", "}
            <span className="tech-tag">Jasmine</span>
            {", etc."}
          </Paragraph>
          <Paragraph fontsize="1.3rem" beforeTag={false} afterTag={false}>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, features, animations, and coding interactive layouts.
          </Paragraph>
          <Paragraph fontsize="1.3rem" beforeTag={false} afterTag={true}>
            Visit my{" "}
            <a
              href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            profile for more details or just <Link to="/contact">contact</Link>
            {" me."}
          </Paragraph>
        </div>
        <div className="skills-details">
          <Chart color="#00D1F7" fill="86" title="React" />
          <Chart color="#DD4B25" fill="80" title="HTML" />
          <Chart color="#0271C2" fill="70" title="CSS" />
          <Chart color="#EFD81D" fill="75" title="Javascript" />
          <div className="work-row">
            <ExperienceCard
              title="Front End Developer"
              companyName=" Oracle "
              time="2019-Present"
              desc="I have been working at ORACLE for almost 2.5 years. Throughout my time here, I have created 50+ responsive pages for a banking website."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
