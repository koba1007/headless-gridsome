module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://c4eedc5c6860ec181afe3a5ccc56c2e632f9697c.hl-a.getshifter.co',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
