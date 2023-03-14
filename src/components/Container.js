import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Header from "./Header";


const Container = () => {
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    listItemsFromUdemyApi()
  }, [])


  function listItemsFromUdemyApi() {
    fetch('http://localhost:3001/cursos')
      .then(response => response.json())
      .then(data => setListItems(data))
      .catch(error => console.error(error));
  }

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
          {listItems.map((res, index) => {
            return (
              <Card
                key={index}
                imageUrl={res.image}
                title={res.title}
                description={res.link}
                style={{ marginBottom: "10px" }} // adiciona margem inferior de 10px para separar os cards
              />
            );
          })}
        </Box>

      </Box>
    </Box>
  )
}
export default Container;