import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (

      <div className="filter-tag-container">
        
        {/* General list of all tags */}
        {/* <div id="filter-tag--toggle"> */}
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <a 
                className="filter-tag--attr" 
                type="anchor"
              >
                {tag}
              </a>
            </Link>
            
          ))}
        {/* </div> */}
        
        {/* <a id="ShowTags" href="#filter-tag--toggle">SHOW TAGS</a> */}

      </div>
    );
  }
}

export default PostTags;
