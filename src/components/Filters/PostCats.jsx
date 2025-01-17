import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

class PostCats extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div className="filter-cat-container">
        
        {cats &&
          cats.map(category => (
            <Link
              key={category}
              to={`/#${(category)}`}
            >
              <a 
                className="filter-cat--jump" 
                type="anchor" 
              >
                {category}
              </a>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostCats;
