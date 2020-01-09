import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Container from "../components/Container";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
