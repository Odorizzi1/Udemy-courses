import { Box, Flex, Spacer, Text, Input, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Link } from "@chakra-ui/react";
import React, { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Box bg="#EBF8FF" px={4} py={3}>
            <Flex alignItems="center">
                <Text fontSize="xl">Busque aqui seu curso!</Text>
                <Spacer />
                <Input type="text" placeholder="Search" size="md" w="300px" />
                <Spacer />
                <Button colorScheme="blue" onClick={() => setIsOpen(true)}>Contato</Button>
            </Flex>
            <Drawer isOpen={isOpen} placement="left" onClose={() => setIsOpen(false)}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Entre em contato comigo!</DrawerHeader>
                    <DrawerBody>
                        <List spacing={3}>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/jonathan-odorizzi/">LinkedIn</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/Odorizzi1">Github</Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`https://api.whatsapp.com/send?phone=5547997709067`}>WhatsApp</Link>
                            </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box>
    );
}

export default Header;