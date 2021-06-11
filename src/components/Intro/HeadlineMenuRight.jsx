import React, { Component } from "react";
import { Link } from "gatsby";
import Subscribe from "./Subscribe";
import EmailForm from "./EmailForm";



class HeadlineMenuRight extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-right">  
          <EmailForm />

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://buttondown.email/creativedirectory"
          >
            Subscribe
          </a>

          <a
            className="headline-menu--link"
            href="/about"
          >
            About
          </a>

          {/* <Subscribe /> */}

          {/* <Link
          className="headline-menu--link" 
          to="/about">About
          </Link> */}
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuRight;
