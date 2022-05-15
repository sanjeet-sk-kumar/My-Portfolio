import React, { useRef, useEffect } from "react";
import styledComponents from "styled-components";
import { Link, Anchor } from "../AllSvg/AllSvg";

const Container = styledComponents.div`
    position: relative;
`;

const Slider = styledComponents.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }
`;

const PreDisplay = styledComponents.div`
  position: fixed;
  top: 0;
  right: 2rem;
`;
const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) hiddenRef.current.style.display = "none";
      else hiddenRef.current.style.display = "block";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="#08FDD8" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="#08FDD8" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
