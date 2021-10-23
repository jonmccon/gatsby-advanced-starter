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
        {/* This is the post list that create a link */}
        {/* add in the cover image here too */}
        {/* Should be used for featured grid area on top */}

        {episodeList.map((post) => (
          <div className={`podcastEpisode ${post.color}`}>
            <div className="pullquote">{post.pullquote}</div>
            <div className="podcastEpisode-content">
              {post.episodePerson}&nbsp;of&nbsp;
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
                {post.title}
              </a>
              
            </div>
            <div className="podcastEpisode-content">{post.twit[0]}</div>
            <div className="podcastEpisode-content">{post.inst}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default EpisodeListing;
