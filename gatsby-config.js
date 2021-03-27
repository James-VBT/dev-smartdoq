/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Smart Doq',
    },
    /* Your site config here */
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['SuperGrotesk Regular, SuperGrotesk Medium, sCamela Medium, SuperGroteskPro, SuperGrotesk Medium, Canela Medium'],
                    urls: ['/fonts/fonts.css'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `curtains`,
              short_name: `curtains`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `standalone`,
              crossOrigin: `use-credentials`,
              cache_busting_mode: `none`,
              icon: `static/favicons/android-chrome-512x512.png`,
            },
          },
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from prismic.io.
         */
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'curtains',
                accessToken: 'MC5YLXgzZ2hFQUFDRUFJeTdi.Flfvv71577-9f--_vTIkAe-_vWQoDe-_ve-_ve-_ve-_vSPvv73vv70xFBE877-9Hu-_vWgO77-9LA',
                releaseID: 'example-eiyaingiefahyi7z',
                linkResolver: ({ node, key, value }) => (doc) => {
                    // Your link resolver
                },
                fetchLinks: [
                    // Your list of links
                ],
                htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
                    // Your HTML serializer
                },
                schemas: {
                    blogpost: require('./src/schemas/blogpost.json'),
                },
                lang: '*',
                prismicToolbar: true,
                shouldDownloadImage: ({ node, key, value }) => {
                   
                },
                imageImgixParams: {
                    
                },
                imagePlaceholderImgixParams: {
                   
                },
                typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
            },
        },
    ],
};
