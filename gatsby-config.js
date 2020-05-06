/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Kyle Turner`,
    description: `Software Engineer | Mobile App Developer | API Architect | Designer | Startup Founder | Serial Entreprenuer`,
    // change this to you website url
    siteUrl: `https://kyleturner.netlify.app`,
    home: {
      title: `Hey! I'm Kyle.`,
      description: `Software & Mobile App Engineer • Platform Architect • UX/UI Designer`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e609f7a2d23fCF_Domain_verify`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle Turner`,
        short_name: `kyleturner`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0696F9`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
