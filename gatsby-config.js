require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Kyle Turner`,
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Kyle Turner`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Kyle Turner - Software Engineer & UX/UI Designer`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://kyleturner.netlify.app`,
    // Used for SEO
    siteDescription: `Software Engineer | Mobile App Developer | API Architect | Designer | Startup Founder | Serial Entreprenuer`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@kylerturner`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {
        basePath: '/',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-scroll-reveal`,
  ],
}
