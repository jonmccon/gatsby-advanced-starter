import React from "react";
import { Link } from "gatsby";

class EpisodeListing extends React.Component {
  getEpisodeList() {
    const episodeList = [];
    this.props.postEdgesDirectory.forEach((postEdge) => {
      episodeList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website,
        episodeURL: postEdge.node.frontmatter.episodeURL,
        episodePerson: postEdge.node.frontmatter.episodePerson,
        episodePromo: postEdge.node.frontmatter.episodePromo,
        color: postEdge.node.frontmatter.color,
      });
    });
    return episodeList;
  }

  render() {
    const episodeList = this.getEpisodeList();
    return (
      <div className="podcast">
        {/* This is the post list that create a link */}
        {/* add in the cover image here too */}
        {/* Should be used for featured grid area on top */}

        {episodeList.map((post) => (
          <div className={`podcastEpisode ${post.color}`}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default EpisodeListing;
