import React from "react";
import "./MagicWallItem.scss";

const MagicWallItem = ({ src, alt, url }) => {
  return (
    <div className="magic-wall-item lazyload">
      <img src={src} alt={alt} />
      <div className="hover-content"></div>
      <a href={url} className="colorBox"></a>
    </div>
  );
};

export default MagicWallItem;
