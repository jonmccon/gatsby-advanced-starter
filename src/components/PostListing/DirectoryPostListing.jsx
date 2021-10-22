import React from "react";
import PostTags from "../Filters/PostTags";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import AudioPlayerSmall from "../Audioplayer/AudioPlayerSmall";

class DirectoryPostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdgesDirectory.forEach((postEdge) => {
      postList.push({
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        website: postEdge.node.frontmatter.website,
        episodeURL: postEdge.node.frontmatter.episodeURL,
        episodePromo: postEdge.node.frontmatter.episodePromo,
        color: postEdge.node.frontmatter.color,
      });
    });
    return postList;
  }


  render() {
    const postList = this.getPostList();
    const postTitle = postList.title;
    return (
      
      <div className="directory-list">
        {postList.map((post) => (
          <React.Fragment>
            {/* 
            Have a class added for each tag that's present. 
            Add an additional a:hover class for each that changes its own display.
            Needs to be added to the tag listing as well. 
            */}

            

            <div className="directory-block--item">
              
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
              
              {post.episodePromo ? 
              <div className={`episodePromo ${post.color}`}>{post.episodePromo && post.episodePromo}</div> : '' 
              }

              {post.episodeURL ? 
              <AudioPlayerSmall 
                podcastURL={post.episodeURL && post.episodeURL} /> : '' 
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
