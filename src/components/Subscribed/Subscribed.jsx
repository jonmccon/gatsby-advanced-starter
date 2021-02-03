import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import AboutContent from "../About/AboutContent";

class Subscribed extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <Headline headline={`You're subscribed, this is great 😺`} />
        <AboutContent />
        
      
      </div>
      </div>
            
      
    );
  }
}

export default Subscribed;
