import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import OurProject from "./components/OurProject"
import Feedback from "./components/Feedback";
import OurAchievements from "./components/OurAchievements";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurProject />
      <OurTeam />
      <OurAchievements />
      <Feedback />
    </div>
  );
}

export default App;
