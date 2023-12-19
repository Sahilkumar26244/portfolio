import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Box background={"black"} color={"white"}>
        <Flex
          borderBottom={"1px solid white"}
          w={"80%"}
          m={"auto"}
          p={"60px 0px 60px 0px"}
          justifyContent={"space-between"}
          direction={{ base: "column-reverse", lg: "row" }}
          gap={"40px"}
        >
          <Box
            w={{ base: "100%", lg: "45%" }}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Text
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"medium"}
            >
              Sahil Kumar
            </Text>
            <Text fontSize={"15px"}>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            w={{ base: "100%", lg: "23%" }}
          >
            <Text
              textTransform={"uppercase"}
              fontSize={"20px"}
              fontWeight={"medium"}
            >
              Social
            </Text>
            <Flex gap={"20px"} alignItems={"center"}>
              <div class="hvr-float">
                <Box _hover={{color:"#7843e9"}}>
                    <FaLinkedinIn style={{ fontSize: "25px", cursor: "pointer" }} />
                </Box>
              </div>
              <div class="hvr-float">
                <Box _hover={{color:"#7843e9"}}>
                <FaGithub style={{ fontSize: "25px", cursor: "pointer" }} />
                </Box>
              </div>
              <div class="hvr-float">
                <Box _hover={{color:"#7843e9"}}>
                <FaTwitter style={{ fontSize: "25px", cursor: "pointer" }} />
                </Box>
              </div>
              <div class="hvr-float">
                <Box _hover={{color:"#7843e9"}}>
                <FaFacebook style={{ fontSize: "25px", cursor: "pointer" }} />
                </Box>
              </div>
            </Flex>
          </Box>
        </Flex>
        <Box w={"80%"} m={"auto"} p={"40px 0px 40px 0px"}>
          <Text textAlign={"center"} fontSize={"10px"}>
            © Copyright 2023. Made by{" "}
            <a
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sahil Kumar
            </a>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
