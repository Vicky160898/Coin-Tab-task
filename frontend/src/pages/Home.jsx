import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "./Login";
import SignUp from "./Signup";

export default function Home() {
  return (
    <>
      <Container maxW={"lg"} centerContent>
        <Box
          display="flex"
          justifyContent={"center"}
          textAlign="center"
          bg={"white"}
          w="100%"
          m={"40px 0 15px 0"}
          borderRadius="lg"
          borderWidth={"1px"}
          backgroundColor="#FFFFFF"
        >
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}
            gap="5px"
            m={"auto"}
            bg={"white"}
            w="100%"
            borderRadius="lg"
            borderWidth={"1px"}
          >
            <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
              Cointab Authentication
            </Text>
          </Box>
        </Box>
        <Box
          bg={"white"}
          w="100%"
          p={4}
          borderRadius="lg"
          color={"black"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb={"1em"}>
              <Tab w={"50%"}>Login</Tab>
              <Tab w={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}
