import React, { Component } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Play from '../../static/assets/play_circle-24px.svg';   
import Pause from '../../static/assets/play_circle-24px.svg';   


// we're on to something here in that the icons in the player are being subbed out for custom icons
// however loading an svg on the gatsby side is the issue, doesn't n=know how to handle it as an object 

class AudioPlayerSmall extends Component {
  render() {
    const { podcastURL } = this.props;
    const playIcon = Play;
    const pauseIcon = Pause;
    
    return (
      <a class="audioPlayer-small">
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
          customIcons={{
            play: playIcon,
            pause: pauseIcon 
            }}
        />
      </a>
      
    );
  }
}

export default AudioPlayerSmall;


 
