import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
