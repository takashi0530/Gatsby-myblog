module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
    // siteUrl: `https://www.yourdomain.tld`,
    description: 'こんにちは、ギャツビー'
  },
  plugins: [
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: `https://qiita.com/xxxx/feed`,
        name: 'Qiita',
      },
    },
  ],
};
