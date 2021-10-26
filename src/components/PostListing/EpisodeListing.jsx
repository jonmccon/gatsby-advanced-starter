import React from "react";
import { Link } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import EpisodeBlockPlayer from "../Audioplayer/EpisodeBlockPlayer";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import Play from '../../static/assets-svg/button-play-large.inline.svg';   
import Pause from '../../static/assets-svg/button-pause-large.inline.svg';


class EpisodeListing extends React.Component {
  getEpisodeList() {
    const episodeList = [];
    this.props.postEdgesDirectory.forEach((postEdge) => {
      episodeList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website,
        twit: postEdge.node.frontmatter.twit,
        inst: postEdge.node.frontmatter.inst,
        linkA: postEdge.node.frontmatter.linkA,
        linkB: postEdge.node.frontmatter.linkB,
        episodeURL: postEdge.node.frontmatter.episodeURL,
        episodePerson: postEdge.node.frontmatter.episodePerson,
        episodePromo: postEdge.node.frontmatter.episodePromo,
        color: postEdge.node.frontmatter.color,
        pullquote:postEdge.node.frontmatter.pullquote,
      });
    });
    return episodeList;
  }

  render() {
    const episodeList = this.getEpisodeList();
    const postTitle = episodeList.title;

    

    return (
      <div className="podcast">
      
        {episodeList.map((post) => (

          <div className= {`podcastEpisode ${post.color}`}>
            

        

        <AudioPlayer         
          src= {post.episodeURL}
          onPlay={e => console.log("onPlay")}
          layout="horizontal-reverse" 
          customProgressBarSection={
            [
              
              RHAP_UI.PROGRESS_BAR,
              // <div className={``}></div>,
              RHAP_UI.CURRENT_TIME,
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
                  label: post.title,
                })
              }}
            />,
            pause: <Pause 
            onClick={e => {
              e.preventDefault()
              trackCustomEvent({
                category: "Audio Player",
                action: "Pause - Featured",
                label: post.title,
              })
            }}
            /> 
            }}
        />
            
            {/* Pull quote */}
            <div className="pullquote">{post.pullquote}</div>
            <div className="podcastEpisode-content">
              <a 
                href={post.website} 
                target="_blank"
                onClick={e => {
                  trackCustomEvent({
                    category: "Episode",
                    action: "Clicked",
                    label: post.title,
                  })
                }}
              >
                {post.episodePerson} of {post.title}
              </a>
            </div>

            {/* If Additional Link A,B */}
            {post.linkA ? 
              <div className="podcastEpisode-content">
                
                {/* <i class="far fa-link"></i> */}
                
                <a 
                    href={`${post.linkA[1]}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Episode",
                        action: "Clicked",
                        label: post.twit,
                      })
                    }}
                  >
                    {post.linkA[0] && post.linkA[0]}
                  </a>
                  &nbsp;<i class="fas fa-anchor"></i>
                </div>
                : '' 
              }
            {post.linkB ? 
              <div className="podcastEpisode-content">
                
                {/* <i class="far fa-link"></i> */}
                
                <a 
                    href={`${post.linkB[1]}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Episode",
                        action: "Clicked",
                        label: post.twit,
                      })
                    }}
                  >
                    {post.linkB[0] && post.linkB[0]}
                  </a>
                  &nbsp;<i class="fas fa-anchor"></i>
                </div>
                : '' 
              }

            {/* If Twitter */}
            {post.twit ? 
              <div className="podcastEpisode-content">
                @&nbsp;
                {/* <i class="far fa-link"></i> */}
                {/* <i class="fas fa-anchor"></i> */}
                <a 
                    href={`https://twitter.com/${post.twit}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Episode",
                        action: "Clicked",
                        label: post.twit,
                      })
                    }}
                  >
                    {post.twit && post.twit}
                  </a>
                  &nbsp;<i class="fab fa-twitter"></i>
                </div>
                : '' 
              }

              {/* If Instagram */}
              {post.inst ? 
                <div className="podcastEpisode-content">
                  @&nbsp;
                  <a 
                    href={`https://www.instagram.com/${post.inst}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Episode",
                        action: "Clicked",
                        label: post.inst,
                      })
                    }}
                  >
                    {post.inst && post.inst}
                  </a>
                  &nbsp;<i class="fab fa-instagram"></i>
                </div>
                : '' 
              }
              
          </div>
      
      
      
                
        ))}
      </div>
    );
  }
}

export default EpisodeListing;
