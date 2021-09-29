import React, { Component } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import Play from '../../static/assets-svg/button-play-large.inline.svg';   
import Pause from '../../static/assets-svg/button-pause-large.inline.svg';




class PodcastPlayer extends Component {
  render() {
    const { podcastTitle } = this.props;
    const { podcastSeason } = this.props;
    const { podcastURL } = this.props;
    
    return (
      <div className="podcast-promo">
        <h3>{podcastSeason}</h3>
        <h2>{podcastTitle}</h2>
        <AudioPlayer         
          src={podcastURL}
          onPlay={e => console.log("onPlay")}
          layout="horizontal-reverse" 
          customProgressBarSection={
            [
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_LEFT_TIME,
            ]
          }
          customAdditionalControls={[]}  
          customVolumeControls={[]}
          showJumpControls={false}
          customIcons={{
            play: <Play 
              onClick={e => {
                e.preventDefault()
                trackCustomEvent({
                  category: "Audio Player",
                  action: "Play - Featured",
                  label: {podcastTitle},
                  value: "1"
                  // may need a value here, the analytics console and package docs differ on requirements
                  // this value was not included in the deploy to test
                })
              }}
            />,
            pause: <Pause 
            onClick={e => {
              e.preventDefault()
              trackCustomEvent({
                category: "Audio Player",
                action: "Pause - Featured",
                label: {podcastTitle},
              })
            }}
            /> 
            }}
        />
      </div>
      
    );
  }
}

export default PodcastPlayer;


 
