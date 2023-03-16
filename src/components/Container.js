import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Card from "./Card";
import Header from "./Header";

const Container = () => {
  const [listItems, setListItems] = useState([]);
  const [originalListItems, setOriginalListItems] = useState([]);

  useEffect(() => {
    listItemsFromUdemyApi();
  }, []);

  function listItemsFromUdemyApi() {
    fetch("http://localhost:3001/cursos")
      .then((response) => response.json())
      .then((data) => {
        setListItems(data);
        setOriginalListItems(data);
      })
      .catch((error) => console.error(error));
  }

  function filterList(searchString) {
    if (!searchString) {
      setListItems(originalListItems);
    } else {
      const filteredList = originalListItems.filter((item) =>
        item.title.toLowerCase().includes(searchString.toLowerCase())
      );
      setListItems(filteredList);
    }
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1"
      >
        <Header onSearch={filterList} />
      </Box>

      <Box
        flex="1"
        bg="#EBF8FF"
        overflow="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={[4, 8, 16, 32]} // responsivo para diferentes tamanhos de tela
      >
        <Box
          maxWidth="1200px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="flex-start"
          width="100%"
          p={4}
          minHeight={`${Math.ceil(listItems.length / 4) * 320}px`} // altura dinâmica de acordo com a quantidade de elementos na lista
        >
          {listItems.map((res, index) => {
            return (
              <Card
                key={index}
                imageUrl={res.image}
                title={res.title}
                description={res.link}
                marginBottom={4} // adiciona margem inferior de 4 (20px) para separar os cards
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
