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
      {
        name: "Email",
        link: "mailto:pkafleprabhakar@gmail.com",
      },
    ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
