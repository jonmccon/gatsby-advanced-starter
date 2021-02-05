import React from "react";
import PostTags from "../Filters/PostTags";
import PodcastPlayer from "../Audioplayer/PodcastPlayer";

class DirectoryPostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdgesDirectory.forEach((postEdge) => {
      postList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website,
        episode: postEdge.node.frontmatter.episode,
      });
    });
    return postList;
  }


  render() {
    const postList = this.getPostList();
    return (
      
      <div class="directory-list">
        {postList.map((post) => (
          <React.Fragment>
            {/* 
            Have a class added for each tag that's present. 
            Add an additional a:hover class for each that changes its own display.
            Needs to be added to the tag listing as well. 
            */}
            <div className="directory-block--item">
              <a href={post.website} target="_blank">
                <li> {post.title} </li>
              </a>

              {post.episode ? 
              <PodcastPlayer podcastURL={post.episode && post.episode}/> : '' 
              }

              {/* <PostTags tags={post.tags} /> */}
              {/* include social handle, make a new component */}
            </div>
          </React.Fragment>

        ))}
        
      </div>
    );
  }
}

export default DirectoryPostListing;
