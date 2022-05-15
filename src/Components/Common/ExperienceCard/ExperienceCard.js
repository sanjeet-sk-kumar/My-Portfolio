import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = ({ title, companyName, time, desc }) => {
  return (
    <div className="work-card">
      <header>{title}</header>
      <section>
        {companyName}
        <time>{time}</time>
      </section>
      <footer>{desc}</footer>
    </div>
  );
};

export default ExperienceCard;
