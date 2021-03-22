
module.exports = {
    siteMetadata: {
        title: 'Smart Doq',
    },
    /* Your site config here */
    plugins: [
        'gatsby-disable-404',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['SuperGrotesk Regular, SuperGrotesk Medium, sCamela Medium, SuperGroteskPro, SuperGrotesk Medium, Canela Medium'],
                    urls: ['/fonts/fonts.css'],
                },
            },
        },
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from prismic.io.
         */
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'recipedia',
                accessToken:
                    'MC5ZRmg5RXhNQUFDTUFKVVBa.PWcz77-977-977-9CkHvv70077-977-977-9Ye-_vX5uCjHvv712WzdJUe-_vQ0vZUE577-9',
                releaseID: 'develop',
                linkResolver: ({ node, key, value }) => (doc) => {s
                    // Your link resolver
                },
                fetchLinks: [],
                htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
                    // Your HTML serializer
                },
                schemas: {
                    blogpost: require('./src/schemas/blogpost.json'),
                },

                // Set a default language when fetching documents. The default value is
                // '*' which will fetch all languages.
                // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
                lang: '*',

                // Add the Prismic Toolbar script to the site. Defaults to false.
                // Set to "legacy" if your repository requires the older toolbar script.
                // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
                prismicToolbar: true,
                shouldDownloadImage: ({ node, key, value }) => {
                  
                },

                // Provide a default set of Imgix image transformations applied to
                // Imgix-backed gatsby-image fields. These options will override the
                // defaults set by Prismic.
                // See: https://docs.imgix.com/apis/url
                imageImgixParams: {
                    
                },

                // Provide a default set of Imgix image transformations applied to
                // the placeholder images of Imgix-backed gatsby-image fields. These
                // parameters will be applied over those provided in the above
                // `imageImgixParams` option.
                // See: https://docs.imgix.com/apis/url
                imagePlaceholderImgixParams: {
                   
                },

                // Set the prefix for the filename where type paths for your schemas are
                // stored. The filename will include the MD5 hash of your schemas after
                // the prefix.
                // This defaults to 'prismic-typepaths---${repositoryName}'.
                typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
            },
        },
    ],
};
