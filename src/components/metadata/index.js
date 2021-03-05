import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from '../../files/logo-87.png'
const Metadata = ({ websiteMeta, uid }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  
  const locationUrl = "https://smart-doq.com/"+uid;
  console.log(locationUrl)
  const titleText = websiteMeta.title.text;
  const websiteDescription = websiteMeta.description.text;
  const linkShareImage = websiteMeta.meta_link_share_image?websiteMeta.meta_link_share_image.url:logo;
 
  const metaDescription = websiteDescription || data.site.siteMetadata.description
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <link href='https://css.gg/all.css' rel='stylesheet'/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta property="og:type" content="website" />
      <title>{`${titleText}`}</title>
      <meta property="og:type" content="video.movie" />
      <meta property="og:title" content={titleText} />
      <meta property="og:image" content={linkShareImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={locationUrl}/>
      <meta name="description" content={metaDescription} />
      <script src="https://unpkg.com/feather-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    </Helmet>
  )
}

export default Metadata