const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Shiyun Lu Developer`,
    description: `Shiyun Lu's portfolio site on frontend development and software engineering`,
    author: `lushiyun`,
    twitterUsername: `@lu_shiyun`,
    siteUrl: `https://shiyunlu.com`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
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
