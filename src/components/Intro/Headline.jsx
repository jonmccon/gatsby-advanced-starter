import React, { Component } from "react";
import { Link } from "gatsby";
import Subscribe from "./Subscribe";



class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        <div className="headline">
          <h1>{headline}</h1>
        </div>

        <iframe id="podcast-one" width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/82eb0d20"></iframe>
        <iframe id="podcast-two" width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/2b18b97a"></iframe>

        {/* When you merge this into test, give a name to the form element instead of the derivative styling */}
        <div className="headline-contact">
          
        <Subscribe />
          <a
            className="headline-contact--link"
            target="_blank"
            href="mailto:jonny@seattlecreative.directory"
          >
            Contact
          </a>
          
          
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;
