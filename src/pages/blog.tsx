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
    {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
      <>
        <h2>{frontmatter.title}</h2>
        <p>{frontmatter.date}</p>
        <p>{excerpt}</p>
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
      }
    }
  }
`;

export default Blog;
