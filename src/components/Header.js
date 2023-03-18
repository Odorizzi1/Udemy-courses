import { Box, Flex, Spacer, Text, Input, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Link } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box bg="#419ecf" px={4} py={3}>
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold" color="#fff" mr={4}>
          Busque aqui seu curso!
        </Text>
        <Input
          type="text"
          placeholder="Digite aqui"
          size="md"
          w="300px"
          bg="#fff"
          color="#333"
          value={searchText}
          onChange={handleInputChange}
        />
        <Spacer />
        <Button
          variant="outline"
          colorScheme="whiteAlpha"
          color="#fff"
          onClick={() => setIsOpen(true)}
        >
          Contato
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent bg="#419ecf">
          <DrawerCloseButton color="#fff"/>
          <DrawerHeader fontSize="2xl" fontWeight="bold" color="#fff">
            Entre em contato comigo!
          </DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <Link href="https://www.linkedin.com/in/jonathan-odorizzi/" isExternal color="#fff">
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/Odorizzi1" isExternal color="#fff">
                  Github
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://api.whatsapp.com/send?phone=5547997709067" isExternal color="#fff">
                  WhatsApp
                </Link>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
