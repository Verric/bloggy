import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const Site = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        TODO: Figure out why I'm building this site, other than trying to
        understand why would people go with GatsbyJs over Create-React-App
      </p>
    </Layout>
  )
}

export default Site

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
