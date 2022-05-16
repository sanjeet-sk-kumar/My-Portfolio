import "./App.scss";
import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
// import Home from "./Components/Home/Home";
// import Layout from "./Components/Layout/Layout";
// import Contact from "./Components/Contact/Contact";
// import Work from "./Components/Work/Work";
import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Components/Home/Home"));
const Layout = React.lazy(() => import("./Components/Layout/Layout"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
// const About = React.lazy(() => import("./Components/About/About"));
const Skills = React.lazy(() => import("./Components/Skills/Skills"));
const Work = React.lazy(() => import("./Components/Work/Work"));

const override = css`
  left: 45%;
  top: 50vh;
`;

function App() {
  return (
    <div className="App">
      {/* <HashLoader color="#08FDD8" css={override} size={50} /> */}
      <React.Suspense
        fallback={<HashLoader color="#08FDD8" css={override} size={50} />}
      >
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="work" element={<Work />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
