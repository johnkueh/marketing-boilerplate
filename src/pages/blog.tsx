import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface Props {
  data: any;
}

const Blog: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
      <>
        <Link to={fields.slug}>
          <p>{frontmatter.title}</p>
        </Link>
        <p>{excerpt}</p>
        <p>{frontmatter.date}</p>
      </>
    ))}
    <Link to="/">Back to home</Link>
  </Layout>
);

export const query = graphql`
  query ALL_POSTS {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Blog;
