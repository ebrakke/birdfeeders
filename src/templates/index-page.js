import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const {
    markdownRemark: { html },
  } = data
  return <div dangerouslySetInnerHTML={{ __html: html }} />
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
