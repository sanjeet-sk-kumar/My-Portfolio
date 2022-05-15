import React from "react";
import L from "leaflet";
import pin from "../../../assets/images/pin.svg";
import s from "../../../assets/images/s-icon.svg";

const iconS = new L.Icon({
  iconUrl: pin,
  iconRetinaUrl: s,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "fall-down",
});

export { iconS };
