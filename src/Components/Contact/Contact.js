import React, { useRef } from "react";
import emailjs from "emailjs-com";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
  Map,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
import "./Contact.scss";
import { iconS } from "../Common/Marker/Marker";
import marker from "../../assets/images/mark.png";
import HeaderTwo from "../Common/HeaderTwo/HeaderTwo";
import Paragraph from "../Common/Paragraph/Paragraph";
// import mapData from "../../data/countries.json";

const icon = L.icon({
  iconUrl: marker,
  iconSize: new L.Point(60, 75),
  className: "fall-down",
  popupAnchor: [0, -28],
});

const Contact = () => {
  const position = [12.976706778441393, 77.66418186010418];
  const formRef = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    console.log(formRef.current.name.value);
    emailjs
      .sendForm(
        "service_qovgc8a",
        "template_r2wppdb",
        formRef.current,
        "I6iK624lYy3GPi0Rq"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const countryStyle = {
    fillColor: "#06C5A9",
    background: "#1D1D1D",
    fillOpacity: 0.5,
    color: "black",
    weight: 2,
  };
  return (
    <section
      id="section-contact"
      data-load="contact"
      className="section-full page-contact"
    >
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label="Contact me"
            fontsize="6.3rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Contact me
          </HeaderTwo>
        </header>
        <Paragraph
          fontsize="1.3rem"
          beforeTag={true}
          afterTag={true}
          className="fadeInUp"
        >
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </Paragraph>
        <div className="contact-form">
          <form
            id="contact"
            ref={formRef}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <ul>
              <li className="half animated fadeInUp">
                <input
                  className="input__field input__field--hoshi"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <label
                  htmlFor=""
                  className="input__label--hoshi input__label--hoshi-color-2"
                ></label>
              </li>
              <li className="half animated fadeInUp">
                <input
                  className="input__field input__field--hoshi"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor=""
                  className="input__label--hoshi input__label--hoshi-color-2"
                ></label>
              </li>
              <li className="animated fadeInUp">
                <input
                  className="input__field input__field--hoshi"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor=""
                  className="input__label--hoshi input__label--hoshi-color-2"
                ></label>
              </li>
              <li className="animated fadeInUp">
                <textarea
                  className="input__field input__field--hoshi"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <label
                  htmlFor=""
                  className="input__label--hoshi input__label--hoshi-color-2"
                ></label>
              </li>
              <li className="submit animated fadeInUp">
                <input type="hidden" name="ip" value="115.99.101.93" />
                <a
                  href
                  id="submit-form"
                  className="flat-button submit-form"
                  onClick={sendEmail}
                >
                  <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">Send Message!</span>
                  </div>
                </a>
                <input
                  style={{ display: "none" }}
                  type="submit"
                  className="flat-button"
                  value="SEND"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          id="map"
          className="map-wrap leaflet-container"
          style={{ overflow: "hidden", opacity: 1 }}
        >
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", fillColor: "green" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker className="fall-down" position={position} icon={icon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          {/* <MapContainer
            style={{ height: "100vh" }}
            zoom={18}
            center={[12.9766515, 77.6640561]}
          >
            <GeoJSON style={countryStyle} data={mapData.features} />
          </MapContainer> */}
        </div>
        <div className="info-map show">
          Sanjeet Kumar,
          <br />
          13th Cross CVR, <br /> Bangalore-560075 <br />
          India <br />
          <span>sanjeetkumar186@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
