import React, { useState, useEffect } from "react";
import styledComponents from "styled-components";
import AnimateLetters from "../AnimateLetters/AnimateLetters";

const Header = styledComponents.h2`
    font-family: "Coolvetica";
    color: #08fdd8;
    font-weight: 400;
    margin-top: 0;
    position: relative;
    left: -10px;
    font-size: ${(props) => (props.fontsize ? props.fontSize : "6.3rem")};
    line-height: 6.7rem;
    ${({ beforeTag }) =>
      beforeTag &&
      `
        &:before {
          content: "<h2>";
          font-family: "La Belle Aurore", cursive;
          color: #539cd4;
          font-size: 18px;
          opacity: 0;
          position: absolute;
          margin-top: -4rem;
          left: -1rem;
          animation: fadeIn 1s 2s forwards;
        }
      `}
    ${({ afterTag }) =>
      afterTag &&
      `
        &:after{
            content: "</h2>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            opacity: 0;
            position: absolute;
            left: -1rem;
            bottom: -4rem;
            animation: fadeIn 1s 2s forwards;
        }
    `}

    @media (max-width: 1300px){
      font-size: 4.5rem;
      line-height: 4rem;
      ${({ afterTag }) =>
        afterTag &&
        `
        &:after{
          font-size: 14px;
          bottom: -2.5rem;
        }
      `}

      ${({ beforeTag }) =>
        beforeTag &&
        `
      &:before{
        font-size: 14px;
        margin-top: -2.5rem;
      }
    `}
    }
    
`;
const HeaderTwo = (props) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => setLetterClass("text-animate-hover"), 4000);
  }, []);

  const defaultStyle = {
    fontSize: "4.5rem",
    lineHeight: "4rem",
  };

  return (
    <Header {...props} style={props.style ? { ...props.style } : defaultStyle}>
      <AnimateLetters
        letterClass={letterClass}
        strArray={[...props.children]}
        idx={props.delay}
      />
    </Header>
  );
};

export default HeaderTwo;
