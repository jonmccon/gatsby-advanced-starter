import React from "react";
import { Link } from "gatsby";

class EpisodeListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website,
        episodeURL: postEdge.node.frontmatter.episodeURL,
        episodePerson: postEdge.node.frontmatter.episodePerson,
        episodePromo: postEdge.node.frontmatter.episodePromo,
        color: postEdge.node.frontmatter.color,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="podcast">
        {/* This is the post list that create a link */}
        {/* add in the cover image here too */}
        {/* Should be used for featured grid area on top */}

        {postList.map((post) => (
          <Link className="podcast--link" to={post.path} key={post.title}>
            <h2>{post.title}</h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default EpisodeListing;
