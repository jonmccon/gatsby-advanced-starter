import React, { Component } from "react";
import { Link } from "gatsby";



class HeadlineMenuLeft extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="headline-menu-left">  
          
          <a
            className="headline-menu--link"
            target="_blank"
            href="https://forms.gle/hgCya8qFC4AKpetf6"
          >
            Get Listed
          </a>

          <a
            className="headline-menu--link"
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

export default HeadlineMenuLeft;
