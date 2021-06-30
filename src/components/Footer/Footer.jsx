import React, { Component } from "react";
import { Link } from "gatsby";


class Footer extends Component {
  render() {
    // const { config } = this.props;
    // // const url = config.siteRss;
    // const { copyright } = config;
    
    return (
      <footer className="footer">

          <Link
            className="highlight" 
            to="/submit">Get Listed
          </Link> 
        
          <a
            target="_blank"
            href="https://github.com/jonmccon/seattle-creative-directory"
          >
             Made in the PNW
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/seattlecreative.directory/"
          >
             Follow on Instagram
          </a>
          

      </footer>
    );
  }
}

export default Footer;
