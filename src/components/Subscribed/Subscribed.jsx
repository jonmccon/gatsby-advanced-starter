import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import "./Subscribed.css";

class Subscribed extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <Headline headline={`You're subscribed, this is great 😺`} />
        
      
      </div>
      </div>
            
      
    );
  }
}

export default Subscribed;
