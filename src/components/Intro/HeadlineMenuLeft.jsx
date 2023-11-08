import React, { Component } from "react";
import { Link } from "gatsby";



class HeadlineMenuLeft extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-left">  
          
          <a
          className="headline-menu--link highlight" 
          href="https://research.typeform.com/to/UR7SpT93"
          target="_blank">
            Get Listed
          </a>

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
          
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuLeft;
