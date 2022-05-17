import React from "react";
import resume from "../../../assets/resume/Sanjeet-Resume.pdf";
import "./DownloadBtn.scss";

const DownloadBtn = () => {
  return (
    <div className="downloadBtn">
      <div class="download-wrap">
        <div class="download">
          <a href={resume} class="button-download" download>
            Download Resume
            <span class="icon-wrap">
              <i class="icon-download" style={{ color: "#FD1056" }}></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadBtn;
