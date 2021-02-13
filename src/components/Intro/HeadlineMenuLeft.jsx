import React, { Component } from "react";
import { Link } from "gatsby";



class HeadlineMenuLeft extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-left">  
          
          <a
            className="headline-menu--link highlight"
            target="_blank"
            href="https://forms.gle/hgCya8qFC4AKpetf6"
          >
            Get Listed
          </a>

          {/* <a
            className="headline-menu--link"
            target="_blank"
            href="mailto:jonny@seattlecreative.directory"
          >
            Contact
          </a> */}

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://buttondown.email/creativedirectory"
          >
            Subscribe
          </a>

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://seattlecreative.show/"
          >
            Listen
          </a>

          

          <a
            className="headline-menu--link"
            href="/about"
          >
            About
          </a>
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuLeft;
