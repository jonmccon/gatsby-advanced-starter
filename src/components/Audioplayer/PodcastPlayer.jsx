import React, { Component } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Play from '../../static/assets-svg/button-play-large.svg';   
import Pause from '../../static/assets-svg/button-pause-large.svg';




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
            play: <Play />,
            pause: <Pause /> 
            }}
        />
      </div>
      
    );
  }
}

export default PodcastPlayer;


 
