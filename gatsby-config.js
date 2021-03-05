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

                // An API access token to your prismic.io repository. This is optional.
                // You can generate an access token in the "API & Security" section of
                // your repository settings. Setting a "Callback URL" is not necessary.
                // The token will be listed under "Permanent access tokens".
                accessToken:
                    'MC5YLXgzZ2hFQUFDRUFJeTdi.Flfvv71577-9f--_vTIkAe-_vWQoDe-_ve-_ve-_ve-_vSPvv73vv70xFBE877-9Hu-_vWgO77-9LA',

                // If you provide a release ID, the plugin will fetch data from Prismic
                // for a specific release. A Prismic release is a way to gather a
                // collection of changes for a future version of your website. Note that
                // if you add changes to a release, you'll need to rebuild your website
                // to see them.
                // See: https://user-guides.prismic.io/en/collections/22653-releases-scheduling#the-basics-of-a-release
                releaseID: 'example-eiyaingiefahyi7z',

                // Set a link resolver function used to process links in your content.
                // Fields with rich text formatting or links to internal content use this
                // function to generate the correct link URL.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different link resolver logic for each field if necessary.
                // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
                linkResolver: ({ node, key, value }) => (doc) => {
                    // Your link resolver
                },

                // Set a list of links to fetch and be made available in your link
                // resolver function.
                // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
                fetchLinks: [
                    // Your list of links
                ],

                // Set an HTML serializer function used to process formatted content.
                // Fields with rich text formatting use this function to generate the
                // correct HTML.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different HTML serializer logic for each field if necessary.
                // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
                htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
                    // Your HTML serializer
                },

                // Provide an object of Prismic custom type JSON schemas to load into
                // Gatsby. This is required.
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

                // Set a function to determine if images are downloaded locally and made
                // available for gatsby-transformer-sharp for use with gatsby-image.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different logic for each field if necessary.
                // This defaults to always return false.
                shouldDownloadImage: ({ node, key, value }) => {
                    // Return true to download the image or false to skip.
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
