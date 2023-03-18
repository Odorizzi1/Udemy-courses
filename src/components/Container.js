import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";
import Header from "./Header";

const Container = () => {
  const [listItems, setListItems] = useState([]);
  const [originalListItems, setOriginalListItems] = useState([]);

  useEffect(() => {
    listItemsFromUdemyApi();
  }, []);

  function listItemsFromUdemyApi() {
    fetch("https://aged-water-7563.fly.dev/cursos")
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
    <Box display="flex"
      overflow="auto"
      flexDirection="column"
      minHeight="100vh">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1">
        <Header onSearch={filterList} />
      </Box>

      <Box
        flex="1"
        bg="#EBF8FF"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={[4, 8, 16, 32]}
      >
        <Box
          overflow="auto"
          maxWidth="1200px"
          width="100%"
          py={4}
          px={2}
          sx={{
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Flex
            width={`${listItems.length * 320}px`}
            sx={{
              overflowX: "auto",
              scrollbarWidth: "none",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            {listItems.map((res, index) => {
              return (
                <Card
                  key={index}
                  imageUrl={res.image}
                  title={res.title}
                  description={res.link}
                  marginRight={4}
                  width="300px"
                />
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
