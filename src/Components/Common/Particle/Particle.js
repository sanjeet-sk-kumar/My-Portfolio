import React from "react";
import styledComponents from "styled-components";
// import Particles from "react-particles-js";
import Particles from "react-tsparticles";

import configLight from "../../../config/particlesjs-config-light.json";
import configDark from "../../../config/particlesjs-config-dark.json";

const Box = styledComponents.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0 ;
    z-index: 0;

`;

const Particle = (props) => {
  return (
    <Box>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default Particle;
