import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaQuora } from "react-icons/fa";
import "./Menu.scss";
import logoS from "../../assets/images/s.png";

const Menu = ({ onMenuItemCLick }) => {
  return (
    <menu className="main-menu">
      <div className="main-menu__top">
        <Link className="logo" to="/" onClick={() => onMenuItemCLick("/home")}>
          <img src={logoS} alt="logo" height="100" width="80" />
          <span>Sanjeet</span>
        </Link>
        <span>Web Developer</span>
      </div>
      <nav className="main-menu__nav">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => onMenuItemCLick("About")}
        >
          About
        </NavLink>
        <NavLink to="/skills" onClick={() => onMenuItemCLick("Skills")}>
          My Skills
        </NavLink>
        <NavLink to="/work" onClick={() => onMenuItemCLick("Work")}>
          Work
        </NavLink>
        <NavLink to="/contact" onClick={() => onMenuItemCLick("Contact")}>
          Contact
        </NavLink>
      </nav>
      <ul className="social">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sanjeet-sk-kumar"
          >
            <FaGithub></FaGithub>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.quora.com/profile/Sanjeet-Kumar-452"
          >
            <FaQuora></FaQuora>
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
