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
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
          // Domain ID found when adding a domain in the admin panel.
          domainId: "1a47fd3f-a2f9-4674-97f9-a04eda15b69e",
          // URL to Server eg: "https://analytics.test.com".
          server: "https://ackee-heyjoe.herokuapp.com",
          // Disabled analytic tracking when running locally
          // IMPORTANT: Set this back to false when you are done testing
          ignoreLocalhost: true,
          // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
          // False due to detailed information being personalized:
          // https://github.com/electerious/Ackee/blob/master/docs/Anonymization.md#personal-data
          detailed: false
      }
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
