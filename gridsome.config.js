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
        baseUrl: 'https://3ea25e43304afbc914aaee156a7db5abb2e6a192.hl-a.getshifter.co/',
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
