module.exports = {
  siteMetadata: {
    title: `Expressive Therapies Utah`,
    description: `Music therapy serving Utah. We provide music therapy, music lessons, mental health services and rock groups for adolescents, hospice, and addiction recovery. We answer questions like "What is music therapy?" and "What is art therapy?". Mostly located in Salt Lake city, we provide individual therapy as well.`,
    author: `@Scott_McKell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `expressive-therapies-utah`,
        short_name: `etu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/piano.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Meie Script', 'Roboto', 'Lato', 'Marmelad']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
