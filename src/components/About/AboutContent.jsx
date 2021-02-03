import React, { Component } from "react";

class About extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="aboutContent">
            <p>This is a phonebook for you and your creative peers in the Pacific Northwest. We also have an interview series called the Seattle Creative Show that can either be found on the homepage, in your favorite podcast player or <a href="https://seattlecreative.show/">see all available platforms here.</a> If you have any questions or suggestions please feel free to reach out <a href="mailto:jonny@seattlecreative.directory" target="_blank">in email.</a></p>

            <p>For more behind the scenes, there's a real nice <a href="http://marketingnw.com/new-seattle-creative-directory/">write up in Marketing Northwest on the project</a> that you can check out.
            </p>
            <p>
            Created with love by<br />
            <a href="https://twitter.com/jonmccon" target="_blank">Jonny McConnell</a><br />
            <a href="https://www.instagram.com/ben_busy" target="_blank">Ben Hubbard</a><br />
            <a href="https://sea-to-sound.com" target="_blank">Lee Gehrig</a>
            </p>

        </div>
        <div className="spacer"></div>
        </React.Fragment>
    );
  }
}

export default About;
