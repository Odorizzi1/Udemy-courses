import { Box, Image, Text } from "@chakra-ui/react";

function Card({ imageUrl, title, description }) {
   
    return (
        <Box
            w="18vw"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
        >
            <Image src={imageUrl} alt={"title"} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500" mr="2">
                        ROOM · 1 BED
                    </Text>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                            {title}
                    </Text>
                </Box>

                <Text
                    mt="2"
                    fontSize="sm"
                    color="gray.500"
                    lineHeight="tall"
                    noOfLines={3}
                >
                    {description} 
                </Text>
            </Box>
        </Box>
    );
}
export default Card;