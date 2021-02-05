import React, { Component } from "react";
import { Link } from "gatsby";
import Subscribe from "./Subscribe";



class HeadlineMenuRight extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-right">  
          <Subscribe />

          <Link
          className="headline-menu--link headline-menu--about" 
          to="/about">About
          </Link>
          
        </div>
      </React.Fragment>
    );
  }
}

export default HeadlineMenuRight;
