import React, { Component } from "react";



class Headline extends Component {
  render() {
    const { headline } = this.props;
    return (
      <React.Fragment>
        <div className="headline">
          <h1>{headline}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Headline;
