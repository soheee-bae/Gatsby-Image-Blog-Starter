const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { title: { ne: "null" }, draft: { ne: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                title
                date
                subtitle
                category
                tags
                background
                emoji
                draft
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
                date
                subtitle
                category
                tags
                background
                emoji
                draft
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
                date
                subtitle
                category
                tags
                background
                emoji
                draft
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: edge.node.fields.slug,
          previous: edge.next,
          next: edge.previous,
        },
      });
    });
  });
};
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
