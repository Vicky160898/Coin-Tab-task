import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let user = JSON.parse(localStorage.getItem("userInfo"));
  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:8080/api/login`,
        { email, password },
        config
      );
      toast({
        title: "Login Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (err) {
      toast({
        title:
          "Invalid Credential or Your email Blocked for 24hr. you attempt the Wrong Password Limit. please try after 24hr!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };
  const handleClick = () => setShow(!show);
  return (
    <VStack spacing={"5px"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg={"#1082CB"}
        color="white"
        _hover={{ bg: "#1082CB", color: "white" }}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Login
      </Button>
      {user ? user.loginAttempts : "loginAttempts:0"}
    </VStack>
  );
}
