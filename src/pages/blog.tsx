import { Link } from "@reach/router";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <Link to="/">Back to home</Link>
  </Layout>
);

export default Blog;
