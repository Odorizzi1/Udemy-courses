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
      height="250px"
      margin="20px"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <Flex h="100%">
        <Image
          src={imageUrl}
          alt={title}
          w="150px"
          h="100%"
          objectFit="cover"
          borderRadius="lg"
          boxShadow="md"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p="6"
        >
          <Text fontWeight="semibold" fontSize="md" mb="4">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" lineHeight="tall">
            {subtitle}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
