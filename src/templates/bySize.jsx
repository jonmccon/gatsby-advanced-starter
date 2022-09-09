import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/Filters/PostTags";
import PostCats from "../components/Filters/PostCats";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import config from "../../data/SiteConfig";
import Logo from "../components/Intro/Logo";
import Headline from "../components/Intro/Headline";
import HeadlineMenuLeft from "../components/Intro/HeadlineMenuLeft";
import HeadlineMenuRight from "../components/Intro/HeadlineMenuRight";
import Footer from "../components/Footer/Footer";

export default class TagTemplate extends React.Component {
  render() {
    const allTags = this.props.data.AllTagsQuery.distinct;
    const allCats = this.props.data.AllCatsQuery.distinct;
    const tagSize = this.props.data.TagSizeQuery.distinct;
    const tagSeattle = this.props.data.TagSeattleQuery.distinct;
    const tagCity = this.props.data.TagCityQuery.distinct;
    const { size } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        
          <Helmet 
            title={`Posts tagged as "${size}" | ${config.siteTitle}`} 
          />
          <div className="pattern">
          <div className="container">
            <Logo />
            <HeadlineMenuLeft />
            <HeadlineMenuRight />
            <div className="headline-wrapper-small">
              <Headline headline={size} />
            </div>

            {/* FILTERS */}
            <div className="filters">              

                <div className="tagSize">
                  <div>
                    <h5>SIZE</h5>
                    <PostTags tags={tagSize} />
                    </div>
                  </div>
                
                <div className="tagSeattle">
                  <div>
                    <h5>SEATTLE BY NEIGHBORHOOD</h5>
                    <PostTags tags={tagSeattle} />
                    </div>
                  </div>
                
                <div className="tagCity">
                  <div>
                    <h5>GREATER PNW</h5>
                    <PostTags tags={tagCity} />
                    </div>
                  </div>

                <div className="allTags">
                  <div>
                    <h5>DISCIPLINE</h5>
                    <PostTags tags={allTags} />
                    </div>
                  </div>

            </div>

            <div className="directory">
              <div className="directory-block--filter">
                <DirectoryListing postEdgesDirectory={postEdges} />
              </div>
            </div>
          </div>
          </div>
        <Footer />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query SizePage($size: String) {
    AllCatsQuery: allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
    TagSizeQuery: allMarkdownRemark {
      distinct(field: frontmatter___size)
    }
    TagSeattleQuery: allMarkdownRemark(
      filter: { frontmatter: { city: { eq: "Seattle" } published: { eq: true } }}
    ) {
      distinct(field: frontmatter___neighborhood)
    }
    TagCityQuery: allMarkdownRemark {
      distinct(field: frontmatter___city)
    }
    AllTagsQuery: allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
    AllTagsQuery: allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }

    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { 
        size: { eq: $size } 
        published: { eq: true }
        }}
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            website
            twit
            inst
            category
            city
            neighborhood
            size
            tags
            episodeURL
            episodePerson
            episodePromo
            color
          }
        }
      }
    }
  }
`;
