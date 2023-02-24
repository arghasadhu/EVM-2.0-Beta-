import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import OurProject from "./components/OurProject"
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurProject />
      <OurTeam />
      <Feedback />
    </div>
  );
}

export default App;
