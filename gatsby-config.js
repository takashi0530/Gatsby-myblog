module.exports = {

  siteMetadata: {
    title: 'My Gatsby Site',
    // siteUrl: `https://www.yourdomain.tld`,
    description: 'こんにちは、ギャツビー'
  },

  // プラグインの有効化
  plugins: [
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        // url: `https://qiita.com/xxxx/feed`,
        url: `https://qiita.com/mottox2/feed`,
        name: 'Qiita',
      },
    },

    // gatsby-config.jsプラグインを有効化する
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "works",
        path: `${__dirname}/src/works.yaml`,
      },
    },
    'gatsby-transformer-yaml'

  ],

  // plugins: [
  //   {
  //     resolve: `gatsby-source-rss-feed`,
  //     options: {
  //       url: `https://qiita.com/mottox2/feed`,
  //       name: `Qiita`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: "works",
  //       path: `${__dirname}/src/works.yaml`,
  //     },
  //   },
  //   // "gatsby-transformer-yaml",
  // ],
};
