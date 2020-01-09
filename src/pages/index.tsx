import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexPage = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/articles">Go to blog</Link>
    </Layout>
  );
};

export default IndexPage;
