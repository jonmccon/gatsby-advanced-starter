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

          <Link
          className="headline-menu--link" 
          to="/about">About
          </Link>
          {/* <a
            className="headline-menu--link"
            href="/about"
          >
            About
          </a> */}
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuRight;
