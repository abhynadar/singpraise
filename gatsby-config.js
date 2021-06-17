module.exports = {
  siteMetadata: {
    title: "singpraise",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        media_folder: "static/img",
        public_folder: "/img"
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
