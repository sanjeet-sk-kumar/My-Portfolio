import React from "react";
import styledComponents from "styled-components";

const Para = styledComponents.p`
    position: relative;
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.fontsize};
    opacity:0;
    animation: fadeIn 1s 2.5s forwards;
    ${({ beforeTag }) =>
      beforeTag &&
      `
        &:before {
            content: "<p>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            position: absolute;
            margin-top: -1rem;
            left: -1rem;
            left: -1rem;
            opacity:0;
            animation: fadeIn 1s 4.1s forwards;
        }
      `}
    ${({ afterTag }) =>
      afterTag &&
      `
        &:after{
            content: "</p>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            position: absolute;
            left: -1rem;
            bottom: -2rem;
            opacity: 0;
            animation: fadeIn 1s 2s forwards;
        }
    `}
    @media (max-width: 480px) {
       font-size: 1rem;
    }
    
`;
const Paragraph = (props) => {
  return <Para {...props}>{props.children}</Para>;
};

export default Paragraph;
