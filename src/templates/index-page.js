import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"

import Layout from "../layout"

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data
  return (
    <Layout>
      <Typography variant="h2">{title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
