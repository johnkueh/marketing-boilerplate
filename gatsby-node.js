const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/post.tsx");

  const result = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    createPage({
      path: `/articles${post.fields.slug}`,
      component: template,
      context: {
        slug: post.fields.slug
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
