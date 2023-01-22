import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Container,
  VStack,
  HStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

function Midpage() {
  return (
    <Container
      w={{ base: "50%", md: "100%" }}
      maxW={{ base: "50%", md: "100%" }}
    >
      <VStack spacing={8}>
        <Image w={"95%"} src="https://gdurl.com/LCaF" />
        <Image
          w={"100%"}
          src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22CorstonWallyWPDarkSandWLineOnsiteBannerDesktop1500x500?fmt=webp&wid=1500"
        />
        <Image src="https://gdurl.com/IwCb" />

        <HStack w={"95%"} spacing={16}>
          <Image
            src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22ColehillMidBlueInterestOnsiteBannerTablet705x397?fmt=webp&wid=705"
            w={"100%"}
          />
          <Image
            src="https://clarks.scene7.com/is/image/Pangaea2Build/AW22Craftdale2HiBlackLeatherOnsiteBannerTablet705x397?fmt=webp&wid=705"
            w={"100%"}
          />
        </HStack>
        <HStack
          w={"95%"}
          justify={"space-around"}
          marginTop={"20px"}
        >
          <Box maxW="32rem">
            <Heading mb={4}>
             ICONS. REIMAGINED. 
            </Heading>
            <Text fontSize="xl">
              OUr latest Clarks icons collection is here.
              utra comfortable, ultra stylish, ultra you
              profiles set to empower every move. sneaker styling and sporty edits lend vintage cool to tried-and-true silhouettes that are made for the world.
              
            </Text>
            <Button
              size="lg"
              colorScheme="ghost"
              mt="24px"
              bg={useColorModeValue("black", "gray.100")}
            >
              Shop Icons
            </Button>
          </Box>

          <Box maxW="32rem">
            <Heading mb={4}>
             ICONS. REIMAGINED. 
            </Heading>
            <Text fontSize="xl">
              OUr latest Clarks icons collection is here.
              utra comfortable, ultra stylish, ultra you
              profiles set to empower every move. sneaker styling and sporty edits lend vintage cool to tried-and-true silhouettes that are made for the world.
              
            </Text>
            <Button
              size="lg"
              colorScheme="ghost"
              mt="24px"
              bg={useColorModeValue("black", "gray.100")}
            >
              Shop Icons
            </Button>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Midpage;
