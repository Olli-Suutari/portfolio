require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js


    siteTitle: `Olli Suutari – portfolio`,
    siteTitleAlt: `Olli Suutari – Full-stack passion for a better web`,
    siteHeadline: `Olli Suutari – Full-stack passion for a better web`,
    siteUrl: `https://olli-suutari.fi/`,
    siteDescription: `Welcome to the portfolio of Olli Suutari`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Olli Suutari`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Olli Suutari – Full-stack passion for a better web`,
        short_name: `Olli Suutari`,
        description: `Portfolio, featuring projects, skillset and goals.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
}
