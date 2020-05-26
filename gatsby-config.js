module.exports = {
  siteMetadata: {
    title: `Prabhakar Kafle`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Me",
        link: "/about/",
      },
      {
        name: "Portfolio",
        link: "/portfolio/",
      },
      {
        name: "Gallery",
        link: "/gallery/",
      },
    ],
    social: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/prabhakarkafle/",
      },
      {
        name: "Github",
        link: "https://github.com/kafleprabhakar/",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/kafleprabhakar",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/PrabhakarKafle",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/prabhakarkafle/",
      },
    ],
    siteUrl: `https://prabhakarkafle.com.np`,
    description: `This is a personal portfolio website of Prabhakar Kafle.`,
    author: `@Prabhakar`,
    image: `/images/og image.jpg`,
    logo: `/images/logo.png`,
    themeColor: "#333b50",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    // `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prabhakar Kafle`,
        short_name: `Prabhakar`,
        start_url: `/`,
        background_color: `#333b50`,
        theme_color: `#333b50`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `pkafle`,
      },
    },
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
        rel: "nofollow",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
