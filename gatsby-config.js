require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `InSpiraLiving`,
    siteUrl: `${
      process.env.GATSBY_STRAPI_URL || "https://strapi-4jqq.onrender.com"
    }`,
    description: `The vision of a new Space-Time organization system for a global civilization in balance with Earth's ecosystems and harmony among peoples.`,
    author: `InSpiraLiving`,
    languages: { defaultLocale: "en", locales: ["en", "es"] },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/spiral-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        showSpinner: true,
        color: `tomato`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://inspiralivingworld.us20.list-manage.com/subscribe/post?u=3b7be2acbd0cc8a8920b8d002&amp;id=3913650550", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          process.env.GATSBY_STRAPI_URL || "https://strapi-4jqq.onrender.com",
        collectionTypes: [
          {
            name: "page",
            api: {
              qs: {
                _locale: "all",
              },
            },
          },
          {
            name: "article",
            api: {
              qs: {
                _locale: "all",
              },
            },
          },
          {
            name: "category",
            api: {
              qs: {
                _locale: "all",
              },
            },
          },
          "writer",
        ],
        singleTypes: [
          {
            name: "global",
            api: {
              qs: {
                _locale: "en",
              },
            },
          },
          {
            name: "global",
            api: {
              qs: {
                _locale: "es",
              },
            },
          },
        ],
        queryLimit: 1000,
      },
    },
  ],
}
