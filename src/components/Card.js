import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Card = ({ title, subtitle, imageUrl, description }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      cursor="pointer"
      onClick={() => window.location.href = "https://udemy.com" + description}
      width="300px"
      height="150px"
      margin="10px"
    >
      <Flex h="100%">
        <Image
          src={imageUrl}
          alt={title}
          w="150px"
          h="100%"
          objectFit="cover"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p="6"
        >
          <Text fontWeight="semibold" fontSize="md" ml="4">
            {title}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
