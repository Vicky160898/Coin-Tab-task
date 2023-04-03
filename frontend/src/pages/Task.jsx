import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Task() {
  let user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
    return;
  };
  return (
    <>
      <Box mt={"50px"}>
        <Text>Email :- {user ? user.email : "email not present"}</Text>
        <Button onClick={handleClick}>LogOut</Button>
      </Box>
    </>
  );
}
