// const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  // siteMetadata: {
  //   siteUrl: urljoin(config.siteUrl, config.pathPrefix),
  //   rssMetadata: {
  //     site_url: urljoin(config.siteUrl, config.pathPrefix),
  //     feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
  //     title: config.siteTitle,
  //     description: config.siteDescription,
  //     image_url: `${urljoin(
  //       config.siteUrl,
  //       config.pathPrefix
  //     )}/logos/logo-512.png`,
  //     copyright: config.copyright,
  //   },
  // },
  plugins: [
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `src/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "directory",
        path: `content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `src/fonts/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              backgroundColor: "#D6D6D6",
              quality: 100,
              disableBgImageOnAlpha: true,
              // use above option if the edges are wonky
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-check-links",
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-simplecast',
    //   options: {
    //     token: 'eyJhcGlfa2V5IjoiOTYxODdjMGRkNjM1ODRhMTg1MDMxOTI4N2U5ODRlNmUifQ==',
    //     podcastId: '30dabfb8-c618-43a5-81c7-c5c83750983a',
    //   },
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seattle Creative Directory`,
        short_name: `Seattle Creative`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#E5E5E5`,
        display: `standalone`,
        icon: `src/static/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: /assets-svg/
          include: /\.inline\.svg$/ /// See below to configure properly

        }
      }
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
  ],
};
