import React from "react";
import Container from "./Container";

const Footer: React.FC = () => (
  <Container py={10} as="footer">
    © {new Date().getFullYear()}, John Kueh
  </Container>
);

export default Footer;
