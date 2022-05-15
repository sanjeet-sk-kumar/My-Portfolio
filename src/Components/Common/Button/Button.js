import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ to, text }) => {
  return (
    <Link to={to} className="link-button">
      <div>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">{text}</span>
      </div>
    </Link>
  );
};

export default Button;
