import React from "react";
import { Link } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";


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
          <div className={`podcastEpisode ${post.color}`}>
            <div className="pullquote">{post.pullquote}</div>
            <div className="podcastEpisode-content">
              <a 
                href={post.website} 
                target="_blank"
                onClick={e => {
                  trackCustomEvent({
                    category: "Directory Listing",
                    action: "Clicked",
                    label: {postTitle},
                  })
                }}
              >
                {post.episodePerson} of {post.title}
              </a>
            </div>

            {post.twit ? 
              <div className="podcastEpisode-content">
                <a 
                    href={`https://twitter.com/${post.twit}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Directory Listing",
                        action: "Clicked",
                        label: {postTitle},
                      })
                    }}
                  >
                    {post.twit && post.twit}
                  </a>
                  &nbsp;<i class="fab fa-twitter"></i>
                </div>
                : '' 
              }

              {post.inst ? 
                <div className="podcastEpisode-content">
                  <a 
                    href={`https://www.instagram.com/${post.inst}`}
                    target="_blank"
                    onClick={e => {
                      trackCustomEvent({
                        category: "Directory Listing",
                        action: "Clicked",
                        label: {postTitle},
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
