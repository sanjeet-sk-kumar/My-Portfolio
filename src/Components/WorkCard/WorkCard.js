import React from "react";
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";

const Box = styledComponents(NavLink)`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover{
        background-color: rgb(0, 0, 0);
        color: rgb(252, 246, 244);
        border: 1px solid rgb(252, 246, 244);
        transition: all 0.3s ease;
    }
`;

const Image = styledComponents.div`
    background-image: ${(props) => `url(${props.src})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transpalent;
    background-position: center center;

    ${Box}:hover &{
        border: 1px solid rgb(252, 246, 244);
    }
`;

const Title = styledComponents.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
margin: 0;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid rgb(0, 0, 0);

${Box}:hover &{
    border-bottom: 1px solid rgb(252, 246, 244);
}
`;

const HashTags = styledComponents.div`
    padding: 0.5rem 0;

`;

const Tag = styledComponents.span`
    padding-right: 0.5rem;
`;

const Date = styledComponents.span`
    padding: 0.5rem 0;
`;
const WorkCard = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Box target="_blank" to={{ pathname: link }}>
      <Image src={imgSrc} />
      <Title>{name}</Title>
      <HashTags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </HashTags>
      <Date>{date}</Date>
    </Box>
  );
};

export default WorkCard;
