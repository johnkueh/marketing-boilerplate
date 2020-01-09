import { Flex, Text } from "@chakra-ui/core";
import { Link } from "gatsby";
import React from "react";
import Container from "./Container";

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container as="header">
    <Flex py={5} justifyContent="space-between">
      <Link to="/">
        <Text>{siteTitle}</Text>
      </Link>
      <Flex>
        <Link to="/articles">Articles</Link>
      </Flex>
    </Flex>
  </Container>
);

export default Header;
