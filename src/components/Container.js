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
    fetch('https://udemy-courses-gold.vercel.app/cursos')
      .then(response => response.json())
      .then(data => console.log(data))
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
          {listItems.map(res => {
            return (
              <Card
                imageUrl={res.image}
                title={res.title}
                description={res.link}
              />
            )
          })}

        </Box>
      </Box>
    </Box>
  )
}
export default Container;