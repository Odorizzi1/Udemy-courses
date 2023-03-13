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
            <Image src={"https://www.gov.br/mj/pt-br/assuntos/noticias/mjc-oferece-23-cursos-via-internet-para-profissionais-de-seguranca/01_26_banner_cursoonline-002.png/@@images/88a7c32b-c829-4dc2-a839-5775edb5a0af.png"} alt={"title"} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500" mr="2">
                        ROOM · 1 BED
                    </Text>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                        "title"    {/* {title} */}
                    </Text>
                </Box>

                <Text
                    mt="2"
                    fontSize="sm"
                    color="gray.500"
                    lineHeight="tall"
                    noOfLines={3}
                >
                    {/* {description} */} "teste desc"
                </Text>
            </Box>
        </Box>
    );
}
export default Card;