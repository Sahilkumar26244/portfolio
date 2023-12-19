import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

function AboutMe({About}) {
  return (
    <div ref={About} >
    <Box  w={"100%"} pt={{base:"40px",lg:"90px"}} background={"#fafafa"} pb={"90px"}>
      <Box pb={"10px"}>
        <Text
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={{ base: "30px", lg: "38px" }}
          lineHeight={"60px"}
          fontWeight={700}
        >
          about me
        </Text>
      </Box>
      <Box
        w={{ base: "5%", lg: "2%" }}
        m={"auto"}
        border={"3px solid #7843e9"}
        borderRadius={"5px"}
      ></Box>
      <Box w={{ base: "90%", lg: "52%" }} m={"auto"} pt={"15px"}>
        <Text
          textAlign={"center"}
          fontSize={{ base: "14px", lg: "20px" }}
          lineHeight={{base:"20px",lg:"32px"}}
          fontWeight={400}
          color={"#666"}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Text>
      </Box>
      <Box p={{ base: "40px 30px 10px 30px", lg: "90px 150px 20px 150px" }}>
        <Flex gap={{base:"40px",lg:"80px"}} direction={{ base: "column", lg: "row" }}>
          <Box
            w={{ base: "100%", lg: "50%" }}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
          >
            <Box>
              <Text
                fontSize={{ base: "", lg: "28px" }}
                lineHeight={"42px"}
                fontWeight={700}
              >
                Get to know me!
              </Text>
            </Box>
            <Box mt={"10px"}>
              <Text
                fontSize={{ base: "", lg: "17px" }}
                lineHeight={"31px"}
                fontWeight={400}
                color={"#666"}
              >
                I'm a{" "}
                <span style={{ fontWeight: "bold" }}>
                  Frontend Web Developer
                </span>{" "}
                building the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the{" "}
                <span style={{ fontWeight: "bold" }}>Projects</span> section.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "", lg: "17px" }}
                lineHeight={"31px"}
                fontWeight={400}
                color={"#666"}
              >
                I also like sharing content related to the stuff that I have
                learned over the years in{" "}
                <span style={{ fontWeight: "bold" }}>Web Development</span> so
                it can help other people of the Dev Community. Feel free to
                Connect or Follow me on my{" "}
                <a href="https://www.linkedin.com/in/sahil-kumar-923694233/"
                  style={{
                    color: "#7843e9",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Linkedin
                </a>{" "}
                where I post useful content related to Web Development and
                Programming
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "", lg: "17px" }}
                lineHeight={"31px"}
                fontWeight={400}
                color={"#666"}
              >
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </Text>
            </Box>
            <Box mt={"18px"}>
              <div class="hvr-float">
                <Button
                  lineHeight={"30px"}
                  fontSize={"17px"}
                  p={"25px 55px 25px 55px"}
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
                  Contact
                </Button>
              </div>
            </Box>
          </Box>
          <Box w={{ base: "100%", lg: "40%" }}>
            <Box>
              <Text fontSize={{base:"20px",lg:"28px"}} lineHeight={"42px"} fontWeight={700}>
                My Skills
              </Text>
            </Box>
            <Box mt={"25px"}>
              <Flex flexWrap={"wrap"} gap={"10px"}>
                <Button fontSize={"14px"}>HTML</Button>
                <Button fontSize={"14px"}>CSS</Button>
                <Button fontSize={"14px"}>Javascript</Button>
                <Button fontSize={"14px"}>React</Button>
                <Button fontSize={"14px"}>SASS</Button>
                <Button fontSize={"14px"}>ChakraUI</Button>
                <Button fontSize={"14px"}>GIT</Button>
                <Button fontSize={"14px"}>Github</Button>
                <Button fontSize={"14px"}>Responsive Design</Button>
                <Button fontSize={"14px"}>SEO</Button>
                <Button fontSize={"14px"}>Express</Button>
                <Button fontSize={"14px"}>MongoDB</Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
    </div>
  );
}

export default AboutMe;
