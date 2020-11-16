const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Shiyun Lu`,
    description: `Shiyun Lu's portfolio site`,
    author: `lushiyun`,
    twitterUsername: `@lu_shiyun`,
    siteUrl: `https://shiyunlu.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`, // for react-modal-video
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-G3XDXR0R8R"],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://shiyun-portfolio-cms.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ShiyunLu`,
        short_name: `SL`,
        start_url: `/`,
        background_color: `rgba(249, 220, 36, 0.4)`,
        theme_color: `#f9dc24`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
