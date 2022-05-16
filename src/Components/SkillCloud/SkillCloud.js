import React, { useEffect } from "react";
import tagCanvas from "tag-canvas";
import "./SkillCloud.scss";

const SkillCloud = ({ techStack = [] }) => {
  useEffect(() => {
    try {
      tagCanvas.Start("myCanvas", "tags", {
        textColour: "#08fdd8",
        fontSize: 12,
        outlineColour: "transparent",
        reverse: true,
        depth: 1.1,
        maxSpeed: 0.07,
        weight: true,
        zoom: 0.8,
        freezeActive: true,
        shuffleTags: true,
        outlineMethod: "none",
        textHeight: 14,
        wheelZoom: false,
        fadeIn: 3000,
      });
    } catch (e) {
      console.log(e);
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }, []);

  return (
    <>
      <div id="myCanvasContainer">
        <canvas
          width="500"
          height="500"
          id="myCanvas"
          style={{ fontSize: "12px" }}
        ></canvas>
      </div>
      <div id="tags">
        <ul style={{ display: "none" }}>
          {techStack.map((skill) => (
            <li key={skill}>
              <a href="/" style={{ fontSize: "12px" }}>
                {skill}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillCloud;
