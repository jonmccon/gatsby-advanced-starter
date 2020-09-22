import React, { Component } from "react";
import { Link } from "gatsby";
import Subscribe from "./Subscribe";



class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        <div className="headline">
          <h1>{headline}</h1>
        </div>

        <iframe 
          className="podcast-promo"
          id="podcast-ep-one" 
          height="200px" 
          width="100%" 
          frameborder="no" 
          scrolling="no" 
          seamless src="https://player.simplecast.com/be27c0b6-9a80-4c2c-a30e-95a4c514929e?dark=false">
        </iframe>
        
        <iframe 
          className="podcast-promo" 
          id="podcast-ep-two" 
          height="200px" 
          width="100%" 
          frameborder="no" 
          scrolling="no" 
          seamless src="https://player.simplecast.com/1c1d24a9-1967-4e16-ae31-77bd11d5f011?dark=false">
        </iframe>
        
        <iframe 
          className="podcast-promo"
          id="podcast-ep-three" 
          height="200px" 
          width="100%" 
          frameborder="no" 
          scrolling="no" 
          seamless src="https://player.simplecast.com/cbc0fabd-0d1c-4bc1-887a-5786d2d4575e?dark=false">
        </iframe>
        

        {/* When you merge this into test, give a name to the form element instead of the derivative styling */}
        <div className="headline-contact">
          
        <Subscribe />
          <a
            className="headline-contact--link"
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

export default Headline;
