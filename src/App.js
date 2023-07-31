import React, { useState } from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";

import ContactConatiner from "./components/ContactConatiner/ContactConatiner";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      
      <ContactConatiner />
      </div>
  )
}

export default App
