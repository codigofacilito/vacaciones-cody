module.exports = {
  pathPrefix: "/vacaciones-cody",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
