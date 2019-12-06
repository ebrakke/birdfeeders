/**
 * Create pages based on templateKey
 */
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  const tags = {}
  // Create workouts and workout directory
  edges.forEach(e => {
    createPage({
      path: e.node.fields.slug,
      tags: e.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(e.node.frontmatter.templateKey)}.js`
      ),
      context: {
        id: e.node.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
