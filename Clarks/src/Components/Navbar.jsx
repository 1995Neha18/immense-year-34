import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { isOpen, onOpen, onClose } from "@chakra-ui/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import { AddIcon } from "@chakra-ui/icons";
import { TbTruckDelivery } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { Divider } from "@chakra-ui/react";
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        spacing={8}
        alignItems="center"
        justify={"center"}
        h={16}
        bg="red.500"
        color="white"
        fontSize="xl"
        fontWeight="semi-bold"
      >
        <Text fontSize="3xl">TAKE AN EXTRA</Text>
        <Text fontSize="4xl">40% OFF CLEARANCE</Text>
        <Text fontSize="xl">USE CODE: EXTRA40</Text>
      </HStack>
      <Flex
        h="14"
        justify={"flex-end"}
        pr="20"
        bg={useColorModeValue("gray.200", "gray.900")}
      >
        <HStack fontSize="3xl" spacing={6}>
          <Stack direction={"row"} alignItems="center">
            <TbTruckDelivery />
            <Button
              variant="ghost"
              colorScheme="black"
              onClick={onOpen}
              fontSize="xl"
            >
              Track Order
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <GrLocation />
            <Button
              variant="ghost"
              colorScheme="black"
              onClick={onOpen}
              fontSize="xl"
            >
              Store Locator
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems="center">
            <FaUserCircle />
            <Button
              variant="ghost"
              colorScheme="black"
              onClick={onOpen}
              fontSize="xl"
            >
              Log in / Register
            </Button>
          </Stack>
        </HStack>
      </Flex>
      <Box bg={useColorModeValue("white")} px={4} pr="10" pl="10">
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box display="flex" alignItems="center">
            <Image
              w={200}
              src="https://gdurl.com/g_Em"
              alt="Clarks"
            />

            <HStack spacing={2} alignItems="center">
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Women
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Men
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Kids
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Originals
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Accessories
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Sale
              </Button>
              <Button
                variant="ghost"
                colorScheme="black"
                onClick={onOpen}
                fontSize="xl"
              >
                Sustainablity
              </Button>
            </HStack>
          </Box>

          {/* <Button */}

          <Flex alignItems={"center"}>
            <Stack
              direction={"row"}
              spacing={16}
              alignItems="center"
              fontSize={"5xl"}
            >
              <CiSearch />
              <HiOutlineShoppingBag />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
     
      <Stack direction="row" h="100px" p={4} bg={useColorModeValue("gray.300", "gray.700")} color={"brown"} alignItems="center"  >
       <Text color={"brown"} pl={500} fontSize={"3xl"}>FREE SHIPPING ON ORDERS OVER $50</Text>
        <Divider orientation="vertical" color={"brown"} />
        <Text  color={"brown"}  pr={600} fontSize={"3xl"}>FREE RETURNS EVERYDAY</Text>
      </Stack>
    </>
  );
}
