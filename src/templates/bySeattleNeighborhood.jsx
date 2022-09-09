import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import Headline from "../components/Intro/Headline";
import HeadlineMenuLeft from "../components/Intro/HeadlineMenuLeft";
import HeadlineMenuRight from "../components/Intro/HeadlineMenuRight";
import PostTags from "../components/Filters/PostTags";
import PostCats from "../components/Filters/PostCats";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import Logo from "../components/Intro/Logo";

export default class CategoryTemplate extends React.Component {
  render() {
    const allTags = this.props.data.AllTagsQuery.distinct;
    // const allCats = this.props.data.AllCatsQuery.distinct;
    const tagSize = this.props.data.TagSizeQuery.distinct;
    const tagSeattle = this.props.data.TagSeattleQuery.distinct;
    const tagCity = this.props.data.TagCityQuery.distinct;
    const { neighborhood } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        
          <Helmet
            title={`Posts in category "${neighborhood}" | ${config.siteTitle}`}
          />
          <div className="pattern">
          <div className="container">
          <Logo />
          <HeadlineMenuLeft />
          <HeadlineMenuRight />
            <div className="headline-wrapper-small">
              <Headline headline={neighborhood} />
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
              <div className="directoryBlockFilter">
                
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
  query SeattlePage($neighborhood: String) {
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

    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { 
        neighborhood: { eq: $neighborhood } 
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
