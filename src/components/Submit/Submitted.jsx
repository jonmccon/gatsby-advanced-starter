import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import HeadlineMenuLeft from "../Intro/HeadlineMenuLeft";
import HeadlineMenuRight from "../Intro/HeadlineMenuRight";
import AboutContent from "../About/AboutContent";

class Submitted extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <HeadlineMenuLeft />
        <HeadlineMenuRight />
        <div className="headline-wrapper-small">
        <Headline headline={`Great, we have your listing and will add it quickly`} />
        </div>
        <AboutContent />
        
      
      </div>
      </div>
            
      
    );
  }
}

export default Submitted;
