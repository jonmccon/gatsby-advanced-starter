import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import HeadlineMenuRight from "../Intro/HeadlineMenuRight";
import AboutContent from "./AboutContent";

class About extends Component {
  render() {
    return (
      // <div className="pattern">
      <div className="container">
        
        <Logo />
        <HeadlineMenuRight />
        <div className="headline-wrapper-small">
          <Headline headline={`Hello & welcome.`} />
        </div>
        <AboutContent />
        
      
      </div>
      // </div>
    );
  }
}

export default About;
