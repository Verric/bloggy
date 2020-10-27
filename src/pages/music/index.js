import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return <Layout location={location} title={siteTitle}></Layout>
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
