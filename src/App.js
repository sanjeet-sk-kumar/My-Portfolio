import "./App.scss";
import React from "react";
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

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<p>Loading...</p>}>
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
