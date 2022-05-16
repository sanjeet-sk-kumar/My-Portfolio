import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaSoundcloud } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import mp3 from "../../assets/music/Night.mp3";
import "./Layout.scss";

const Layout = () => {
  const [isMenuDisplay, setIsMenuDisplay] = useState("open");
  const [soundTrack, setSoundTrack] = useState("off");
  const [mobileClass, setMobileClass] = useState("");
  const myAudio = useRef();
  const soundTrackChangeHandler = (value) => {
    setSoundTrack(value);
    if (value === "on") myAudio.current.play();
    else myAudio.current.pause();
  };
  useEffect(() => {
    document.body.classList.add("window-loaded");
  }, []);
  const changeMenuBtn = (btnType) => {
    const buttonType = btnType === "open" ? "close" : "open";
    setIsMenuDisplay(buttonType);
    if (buttonType === "close") setMobileClass("mobileOpen");
    else setMobileClass("");
  };
  return (
    <div className={mobileClass}>
      <div id="sound">
        <audio ref={myAudio} id="my-audio" loop>
          <source src={mp3} type="audio/mpeg" />
        </audio>
        <FaSoundcloud
          className={`sound-cloud sound-cloud-${soundTrack}`}
          size={32}
        />
        <span>Sound</span>
        <div className="on-off">
          {soundTrack === "on" && (
            <span
              id="on"
              className={`sound-cloud-${soundTrack}`}
              onClick={() => soundTrackChangeHandler("off")}
            >
              {soundTrack}
            </span>
          )}

          {soundTrack === "off" && (
            <span
              id="off"
              className={`sound-cloud-${soundTrack}`}
              onClick={() => soundTrackChangeHandler("on")}
            >
              {soundTrack}
            </span>
          )}
        </div>
      </div>
      <div className={`mbtn`}>
        {isMenuDisplay === "open" && (
          <FaBars
            className="mbtn-op"
            onClick={() => changeMenuBtn("open")}
            size="30"
          />
        )}
        {isMenuDisplay === "close" && (
          <FaTimes
            className="mbtn-cl"
            onClick={() => changeMenuBtn("close")}
            size="30"
          />
        )}
      </div>
      <Menu onMenuItemCLick={changeMenuBtn} />
      <div className="page-outer">
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
        </span>
        <div className="page-inner">
          <Outlet />
        </div>
        <span className="tags bottom-tags">
          <br />
          &lt;/html&gt;
        </span>
      </div>
    </div>
  );
};

export default Layout;
