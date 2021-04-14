import React, { Component } from "react";
import Logo from "../Intro/Logo";
import Headline from "../Intro/Headline";
import HeadlineMenuLeft from "../Intro/HeadlineMenuLeft";
import HeadlineMenuRight from "../Intro/HeadlineMenuRight";
import Submit from "../Submit/Submit";

class About extends Component {
  render() {
    return (
      <div className="pattern">
      <div className="container">
        
        <Logo />
        <HeadlineMenuLeft />
        <HeadlineMenuRight />
        <div className="headline-wrapper-small">
          <Headline headline={`We're building this together`} />
        </div>

        <div className="submitContent">
            <p>
                Hotdog, if you'd like to be included please fill out this short set of questions
                If you just want to email us, send a note to jonny@seattlecreative.directory
            </p>
        

        <Submit />
        </div>
      
      </div>
      </div>
    );
  }
}

export default About;
