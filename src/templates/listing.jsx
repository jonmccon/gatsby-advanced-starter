import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../layout";
import PostTags from "../components/Filters/PostTags";
import DirectoryListing from "../components/PostListing/DirectoryPostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Headline from "../components/Intro/Headline";
import HeadlineMenuRight from "../components/Intro/HeadlineMenuRight";
import HeadlineMenuLeft from "../components/Intro/HeadlineMenuLeft";
import Logo from "../components/Intro/Logo";
import Footer from "../components/Footer/Footer";
import EpisodeListing from "../components/PostListing/EpisodeListing";
import Map from "../components/Map/Map";
import MapWrapper from "../components/Map/MapWrapper";

class Listing extends React.Component {

  render() {
    // this can be refactored as a variable based approach, and only one graphql query
    // Look at the tags page for an example of this

    const allPlaces = this.props.data.AllPlacesQuery.edges;
    const tagSize = this.props.data.TagSizeQuery.distinct;
    const tagSeattle = this.props.data.TagSeattleQuery.distinct;
    const tagCity = this.props.data.TagCityQuery.distinct;
    const allTags = this.props.data.AllTagsQuery.distinct;
    const episodeEdges = this.props.data.EpisodePostsQuery.edges;

    const postEdgesDirectoryA = this.props.data.directoryListingQueryA.edges;
    const postEdgesDirectoryB = this.props.data.directoryListingQueryB.edges;
    const postEdgesDirectoryC = this.props.data.directoryListingQueryC.edges;
    const postEdgesDirectoryD = this.props.data.directoryListingQueryD.edges;
    const postEdgesDirectoryE = this.props.data.directoryListingQueryE.edges;
    const postEdgesDirectoryF = this.props.data.directoryListingQueryF.edges;
    const postEdgesDirectoryG = this.props.data.directoryListingQueryG.edges;
    const postEdgesDirectoryH = this.props.data.directoryListingQueryH.edges;
    const postEdgesDirectoryI = this.props.data.directoryListingQueryI.edges;
    const postEdgesDirectoryJ = this.props.data.directoryListingQueryJ.edges;
    const postEdgesDirectoryK = this.props.data.directoryListingQueryK.edges;
    const postEdgesDirectoryL = this.props.data.directoryListingQueryL.edges;
    const postEdgesDirectoryM = this.props.data.directoryListingQueryM.edges;
    const postEdgesDirectoryN = this.props.data.directoryListingQueryN.edges;
    const postEdgesDirectoryO = this.props.data.directoryListingQueryO.edges;
    const postEdgesDirectoryP = this.props.data.directoryListingQueryP.edges;
    const postEdgesDirectoryQ = this.props.data.directoryListingQueryQ.edges;
    const postEdgesDirectoryR = this.props.data.directoryListingQueryR.edges;
    const postEdgesDirectoryS = this.props.data.directoryListingQueryS.edges;
    const postEdgesDirectoryT = this.props.data.directoryListingQueryT.edges;
    const postEdgesDirectoryU = this.props.data.directoryListingQueryU.edges;
    const postEdgesDirectoryV = this.props.data.directoryListingQueryV.edges;
    const postEdgesDirectoryW = this.props.data.directoryListingQueryW.edges;
    const postEdgesDirectoryX = this.props.data.directoryListingQueryX.edges;
    const postEdgesDirectoryY = this.props.data.directoryListingQueryY.edges;
    const postEdgesDirectoryZ = this.props.data.directoryListingQueryZ.edges;
    const postEdgesDirectoryNumbers = this.props.data.directoryListingQueryNumbers.edges;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <div className="pattern">
          <div className="container">
            
            <Logo />
            <HeadlineMenuLeft />
            <HeadlineMenuRight />
            <div className="headline-wrapper">
            <Headline
              headline={
                "Cataloging the creative studios of the Pacific Northwest"
              }
            />
            </div>
            
            {/* PODCAST SHOW */}
            <div id="showContainer">
              <EpisodeListing postEdgesDirectory={episodeEdges} />
            </div>

            {/* MAP CONTAINER */}
            <div id="mapContainer">
              <MapWrapper places={allPlaces} />
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
            


            {/* DIRECTORY LISTING */}
            <div className="directory">
              {/*             
                  
                  Build a loop that counts characters and feeds them to the graphQL query variable

                  var charCode = "A".charCodeAt(0);    // 65
                  charCode += 1;
                  var next = String.fromCharCode(charCode);      // "B" 
                  
                  */}

              <div className="directory-block">
                
                <div className="directory-block--title"><a id="A"></a>A</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryA} />
                
                <div className="directory-block--title"><a id="B"></a>B</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryB} />

                <div className="directory-block--title"><a id="C"></a>C</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryC} />

                <div className="directory-block--title"><a id="D"></a>D</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryD} />

                <div className="directory-block--title"><a id="E"></a>E</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryE} />

                <div className="directory-block--title"><a id="F"></a>F</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryF} />

              </div>
              
              <div className="directory-block">

                <div className="directory-block--title"><a id="G"></a>G</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryG} />

                <div className="directory-block--title"><a id="H"></a>H</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryH} />

                <div className="directory-block--title"><a id="I"></a>I</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryI} />

                <div className="directory-block--title"><a id="J"></a>J</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryJ} />

                <div className="directory-block--title"><a id="K"></a>K</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryK} />
                
                <div className="directory-block--title"><a id="L"></a>L</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryL} />

                <div className="directory-block--title"><a id="M"></a>M</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryM} />

                <div className="directory-block--title"><a id="N"></a>N</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryN} />
                
              </div>

              <div className="directory-block">              

                <div className="directory-block--title"><a id="O"></a>O</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryO} />

                <div className="directory-block--title"><a id="P"></a>P</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryP} />

                <div className="directory-block--title"><a id="Q"></a>Q</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryQ} />

                <div className="directory-block--title"><a id="R"></a>R</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryR} />

                <div className="directory-block--title"><a id="S"></a>S</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryS} />

              </div>
              
              <div className="directory-block">

                <div className="directory-block--title"><a id="T"></a>T</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryT} />

                <div className="directory-block--title"><a id="U"></a>U</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryU} />

                <div className="directory-block--title"><a id="V"></a>V</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryV} />

                <div className="directory-block--title"><a id="W"></a>W</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryW} />

                {/* <div className="directory-block--title"><a id="X"></a>X</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryX} /> */}

                <div className="directory-block--title"><a id="Y"></a>Y</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryY} />

                <div className="directory-block--title"><a id="Z"></a>Z</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryZ} />

                <div className="directory-block--title"><a id="numbers"></a>#</div>
                <DirectoryListing postEdgesDirectory={postEdgesDirectoryNumbers}/> 

                <div className="directory-block--title" id="endcap">*</div>       
                <div className="directory-block--end">
                  <p>Don't see yourself?</p>
                  
                  <p>
                  <a
                    className="directory-endcap--link highlight" 
                    href="https://research.typeform.com/to/UR7SpT93"
                    target="_blank">
                      Get Listed
                  </a>
                  </p>

                </div>
                
                
              </div>
                   
            </div>

            

            {/* <div className="bottomSpacer"></div> */}

            {/* {this.renderPaging()} */}
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  {
    AllPlacesQuery:  allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            website
            place
          }
        }
      }
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
    EpisodePostsQuery: allMarkdownRemark(
      sort: { fields: frontmatter___episodePromo, order: DESC }
      filter: { frontmatter: { episodeURL: { regex: "https:\/\/cdn.simplecast.com\/" } published: { eq: true }
        } }
    ) {
      edges {
        node {
          frontmatter {
            title
            website
            twit
            inst
            linkA
            linkB
            category
            city
            neighborhood
            size
            tags
            episodeURL
            episodePerson
            episodePromo
            pullquote
            color
          }
        }
      }
    }
    directoryListingQueryA: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "A" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryB: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "B" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryC: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "C" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryD: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "D" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryE: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "E" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryF: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "F" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryG: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "G" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryH: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "H" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryI: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "I" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryJ: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "J" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryK: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "K" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryL: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "L" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryM: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "M" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryN: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "N" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryO: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "O" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryP: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "P" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryQ: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "Q" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryR: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "R" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryS: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "S" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryT: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "T" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryU: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "U" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryV: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "V" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryW: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "W" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryX: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "X" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryY: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "Y" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryZ: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "Z" } published: { eq: true }
        } }
    ) {
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
    directoryListingQueryNumbers: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: "numbers" } published: { eq: true }
        } }
    ) {
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
