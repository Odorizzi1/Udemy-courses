import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Header from "./Header";

const Container = () => {

  return (
    <Box>
      <Box>
        <Header />
      </Box>

      <Box
        h="100vh"
        w="60vw"
        bg="#EBF8FF"
        overflow="auto"
      >
        <Box
          alignItems="center"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          p="10px"
        >
          {/* <button onClick={() => teste()} >CLIQUE AQUI</button> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Box>
    </Box>
  )
}
export default Container;