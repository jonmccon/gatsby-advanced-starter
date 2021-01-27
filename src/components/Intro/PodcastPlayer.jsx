import React, { Component } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



class PodcastPlayer extends Component {
  render() {
    const { podcastTitle } = this.props;
    const { podcastSeason } = this.props;
    const { podcastURL } = this.props;
    return (
      <div class="podcast-promo">
        <h2>{podcastTitle}</h2>
        <h3>{podcastSeason}</h3>
        <AudioPlayer         
          src={podcastURL}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </div>
      
    );
  }
}

export default PodcastPlayer;


 
