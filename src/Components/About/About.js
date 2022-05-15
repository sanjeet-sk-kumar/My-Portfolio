import React from "react";
import SkillCloud from "../SkillCloud/SkillCloud";
import HeaderTwo from "../Common/HeaderTwo/HeaderTwo";
import Paragraph from "../Common/Paragraph/Paragraph";
import "./About.scss";

const About = () => {
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
  return (
    <div className="page-about section-full">
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label="Me, Myself & I"
            fontsize="6.3rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Me, Myself & I
          </HeaderTwo>
          <div className="fake-h2">Me, Myself & I</div>
        </header>
        {/* <br /> */}
        <Paragraph fontsize="1.3rem" beforeTag={true} afterTag={false}>
          I’m very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </Paragraph>

        <Paragraph fontsize="1.3rem" beforeTag={false} afterTag={false}>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </Paragraph>

        <Paragraph fontsize="1.3rem" beforeTag={false} afterTag={true}>
          If I need to define myself in one sentence that would be a
          well-organised person, problem solver, independent employee with high
          attention to detail, and tech-obsessed!!!
        </Paragraph>
      </div>
      <div className="skills-charts">
        <SkillCloud techStack={techStack} />
      </div>
    </div>
  );
};

export default About;
