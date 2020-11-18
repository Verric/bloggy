import React from "react"
import { Button, Card } from "semantic-ui-react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Card />
      <Button primary content="Hello" />
    </Layout>
  )
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
