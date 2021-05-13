module.exports = {
  siteMetadata: {
    title: 'Nathan Sakal',
    author: 'Nathan Sakal',
    description: 'A portfolio website to display some of Nathan Sakal\'s work and accomplishments',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/NS-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
