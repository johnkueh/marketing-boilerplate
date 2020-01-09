const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/article.tsx");

  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
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

  const articles = result.data.allMdx.nodes;

  articles.forEach((article, index) => {
    const previous = index === articles.length - 1 ? null : articles[index + 1];
    const next = index === 0 ? null : articles[index - 1];

    createPage({
      path: `/articles${article.fields.slug}`,
      component: template,
      context: {
        slug: article.fields.slug,
        previous,
        next
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
