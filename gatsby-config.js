module.exports = {
  siteMetadata: {
    title: `Recettes`,
    author: `Guillaume Ferrari`,
    description: `Recettes et autres curiosités culinaires`,
    siteUrl: `https://recettes.heyjoe.fr`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lora`,
            subsets: [`latin`],
            variants: [`400`,`400i`,`400`,`700i`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-235793-30`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Recettes`,
        short_name: `Recettes`,
        start_url: `/`,
        background_color: `#f4efdb`,
        theme_color: `#2b585f`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
}
