import React, { Component } from "react";
import { Link } from "gatsby";
import DarkModeToggle from "./DarkModeToggle";





class HeadlineMenuLeft extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-left">  
          
          {/* <Link
          className="headline-menu--link highlight" 
          to="/submit">Get Listed
          </Link> */}

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://seattlecreative.show/"
          >
            Listen
          </a>

          <Link
          className="headline-menu--link" 
          to="/about">About
          </Link>

          <a
            className="headline-menu--link"
            target="_blank"
            href="https://discord.gg/SVV4XVCFCj"
          >
            Chat
          </a>

          <DarkModeToggle />
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuLeft;
