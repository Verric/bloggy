import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        Commonly go by the name Verric. This is my (nearly) sole avatar, so if
        you see the image below it's a good chance it's me{" "}
      </p>
      <img src="https://i.imgur.com/9gM7DzK.jpg" alt="verric" />
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
