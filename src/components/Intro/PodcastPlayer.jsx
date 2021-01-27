import React, { Component } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';




class PodcastPlayer extends Component {
  render() {
    const { podcastTitle } = this.props;
    const { podcastSeason } = this.props;
    const { podcastURL } = this.props;
    
    return (
      <div class="podcast-promo">
        <h3>{podcastSeason}</h3>
        <h2>{podcastTitle}</h2>
        <AudioPlayer         
          src={podcastURL}
          onPlay={e => console.log("onPlay")}
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
        />
      </div>
      
    );
  }
}

export default PodcastPlayer;


 
