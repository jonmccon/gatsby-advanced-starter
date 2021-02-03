import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import AboutContent from "./AboutContent";

class About extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <Headline headline={`Hello, welcome to the directory.`} />
        <AboutContent />
        
      
      </div>
      </div>
    );
  }
}

export default About;
