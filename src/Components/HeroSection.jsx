import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import background from "../assets/background.svg";
import sahil from "../assets/Sahil_Kumar_Resume.pdf"
function HeroSection({Home}) {
  return (
    <>
      <Box ref={Home} backgroundImage={background} w={"100%"} pt={{base:195,lg:250,xl:300}} h={{base:"730px",lg:"750px",xl:"850px"}}>
        <Box w={{base:"80%",lg:"100%"}} m={"auto"}>
          <Text
            textAlign={"center"}
            fontWeight={800}
            fontSize={{ base: "40px", lg: "60px" }}
            textTransform={"uppercase"}
          >
            Hey, i'm sahil kumar
          </Text>
        </Box>
        <Box w={{base:"80%",lg:"50%"}} m={"auto"} mt={{ base: "30px", lg: "25px" }}>
          <Text
            textAlign={"center"}
            fontWeight={400}
            fontSize={{ base: "15px", lg: "20px" }}
            lineHeight={"29px"}
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </Text>
        </Box>
        <Box
          m={"auto"}
          w={"50%"}
          display={"flex"}
          justifyContent={"center"}
          mt={{ base: "35px", lg: "40px" }}
        >
          <div class="hvr-float">
            <a href={sahil} download="Sahil_Kumar_Resume.pdf">
            <Button
              lineHeight={"30px"}
              fontSize={"20px"}
              p={"30px 70px 30px 70px"}
              borderRadius={"5px"}
              fontWeight={700}
              textTransform={"uppercase"}
              transition={"0.2s"}
              boxShadow={"0 5px 15px 0 rgba(0,0,0,.15)"}
              background={"#7843e9"}
              color={"white"}
              _hover={{ background: "#7843e9" }}
              letterSpacing={"1px"}
            >
              Resume
            </Button>
            </a>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
