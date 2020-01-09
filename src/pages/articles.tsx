import { Box, Text } from "@chakra-ui/core";
import { Link } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

interface Props {
  data: any;
}

const Articles: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <Text fontWeight="bold" fontSize="5xl" as="h1">
      Articles
    </Text>
    {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
      <Box mt={8}>
        <Link to={`/articles${fields.slug}`}>
          <Text as="h2" fontWeight="bold" fontSize="3xl">
            {frontmatter.title}
          </Text>
        </Link>
        <Text as="p">{excerpt}</Text>
        <Text mt={3} as="p">
          {frontmatter.date}
        </Text>
      </Box>
    ))}
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

export default Articles;
