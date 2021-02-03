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

        <div className="headline-contact">
          
        <Subscribe />
          <a
            className="headline-contact--link"
            target="_blank"
            href="mailto:jonny@seattlecreative.directory"
          >
            Contact
          </a>
          <Link
          className="headline-contact--link headline-contact--about" 
          to="/about">About
          </Link>
                 
          
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;
