import { Box, ChakraProvider, extendTheme, } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const theme = extendTheme({
  colors: {
    patterns: {
      primary: "#63B3ED",
      secondary: "#BEE3F8",
      backGround:"#BEE3F8"
    },
  },
});


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Box bg="#EBF8FF" h="100vh">
      <App />
    </Box>
  </ChakraProvider>,
  document.getElementById("root")
);
