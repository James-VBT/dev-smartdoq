import React from 'react'
import Layout from '../components/layout'
import Metadata from "../components/metadata"
import {
  getWebsiteMeta
} from '../utils/index'
const NotFoundPage = (props) => {
  const { data } = props
  const websiteMeta = getWebsiteMeta(data)
  return (<Layout>
    <Metadata  websiteMeta={websiteMeta} title={websiteMeta.title.text} description={websiteMeta.description.text} />
     
   </Layout>
 )
 
}
  
  
export default NotFoundPage


export const pageQuery = graphql`
  query($uid: String) {
    prismicBlogpost(uid: { eq: $uid }) {
      data {
        body {
          ... on PrismicBlogpostBodyWebsitemeta {
            primary {
              title {
                text
              }
              description {
                text
              }
            }
          }
        }
      }
    }
    }
`
