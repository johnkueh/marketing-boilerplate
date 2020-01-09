import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";

const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      px={[0, 0, 0, 10]}
      mx="auto"
      maxWidth={["90%", "90%", "90%", "1440px"]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
