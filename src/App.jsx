import { useState } from "react";
import "./App.css";
import { CV } from "./CV/CV";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEdu, setShowEdu] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <div className="buttons-container">
        <button onClick={() => setShowEdu(true)}>Show education</button>
        <button onClick={() => setShowEdu(false)}>Show Experience</button>
      </div>
      <div>
        {showEdu ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} habilities={habilities} />
    </div>
  );
}

export default App;
