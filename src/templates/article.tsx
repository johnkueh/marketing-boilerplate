import { Box, Text } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/Layout";

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Text fontWeight="bold" fontSize={30} as="h1">
        {frontmatter.title}
      </Text>
      <Text as="h2" fontSize={22}>
        {frontmatter.date}
      </Text>

      <Box my={10}>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Box>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={`articles${previous.fields.slug}`}>
              <p>Previously: {previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={`articles${next.fields.slug}`}>
              <p>Read next: {next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

const components = {
  h2: props => <Text as="h2" fontSize="4xl" fontWeight="bold" {...props} />
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
