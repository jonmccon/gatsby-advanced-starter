import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import HeadlineMenu from "../Intro/HeadlineMenu";
import AboutContent from "../About/AboutContent";

class Subscribed extends Component {
  render() {
    return (
      // <div className="pattern">
      <div className="container">
        
        <Logo />
        <HeadlineMenu />
        <div className="headline-wrapper-small">
        <Headline headline={`You're subscribed, this is great 😺`} />
        </div>
        <AboutContent />
        
      
      </div>
      // </div>
            
      
    );
  }
}

export default Subscribed;
