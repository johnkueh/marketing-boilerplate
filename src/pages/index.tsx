import { Button, Text } from "@chakra-ui/core";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexPage = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <SEO title="Home" />
      <Text fontWeight="bold" fontSize="5xl" as="h1">
        {title}
      </Text>
      <Text fontSize="2xl" as="p">
        {description}
      </Text>
      <Link to="/articles">
        <Button mt={8}>Go to articles</Button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
