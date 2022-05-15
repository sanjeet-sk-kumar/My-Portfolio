import React, { useRef, useEffect } from "react";
import "./Work.scss";
import styled from "styled-components";
import WorkCard from "../WorkCard/WorkCard";
import Card from "../Common/Card/Card";
import { Blogs } from "../../data/BlogData";
import { Work } from "../../data/WorkData";
import Anchor from "../Common/Anchor/Anchor";
import Particle from "../Common/Particle/Particle";
import { motion } from "framer-motion";
import S from "../../assets/images/s.png";

const MainContainer = styled.div`
  ${
    "" /* background-image: url(${book});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; */
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Main = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  @media (max-width: 480px) {
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    grid-gap: calc(0.5rem + 2vw);
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0;
    padding: 0;
    grid-gap: calc(0.5rem + 2vw);
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkComponent = () => {
  const ref = useRef(null);
  const sRef = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      // element.style.transform = `translateX(${-window.pageYOffset}px)`;
      // return (sRef.current.style.transform =
      //   "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);
  return (
    <div
      className="section-full"
      style={{ position: "relative", height: "auto" }}
    >
      <Particle />
      <Box>
        {/* <Anchor /> */}
        <Center>
          <Main variants={container} initial="hidden" animate="show">
            {Work.map((d) => {
              return <Card key={d.id} data={d} />;
            })}
          </Main>
          {/* <Rotate ref={sRef}>
            <img width={80} height={80} src={S} alt="S" />
          </Rotate> */}
        </Center>
      </Box>
    </div>
  );
};

export default WorkComponent;
