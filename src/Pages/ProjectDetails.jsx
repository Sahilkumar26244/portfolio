import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import background from "../assets/background.svg";
import { Link, useParams } from "react-router-dom";
import data from "../api/data";

function Project1() {
  const { id } = useParams();

  const project = data.find((item) => item.id === parseInt(id));

  console.log(project);

  return (
    <>
      <Box
        backgroundImage={background}
        w={"100%"}
        pt={{ base: 195, lg: 250 }}
        h={{ base: "670px", lg: "750px" }}
      >
        <Box w={{ base: "80%", lg: "100%" }} m={"auto"}>
          <Text
            textAlign={"center"}
            fontWeight={800}
            fontSize={{ base: "40px", lg: "60px" }}
            textTransform={"uppercase"}
          >
            {project.title}
          </Text>
        </Box>
        <Box
          w={{ base: "80%", lg: "50%" }}
          m={"auto"}
          mt={{ base: "30px", lg: "25px" }}
        >
          <Text
            textAlign={"center"}
            fontWeight={400}
            fontSize={{ base: "15px", lg: "20px" }}
            lineHeight={"29px"}
          >
            {project.description}
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
            <a href={project.link}>
            <Button
              lineHeight={{base:"27px",lg:"30px"}}
              fontSize={{base:"18px",lg:"20px"}}
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
              Project Link
            </Button>
            </a>
          </div>
        </Box>
      </Box>
      <Box pb={"70px"}
        w={{base:"90%",lg:"55%"}}
        m={"auto"}
        display={"flex"}
        flexDirection={"column"}
        gap={"30px"}
      >
        <Box>
          <Image w={"100%"} h={"100%"} src={project.img} />
        </Box>
        <Box w={{base:"100%",lg:"85%"}} m={"auto"}>
          <Box display={"flex"} flexDirection={"column"} gap={"25px"}>
            <Text fontWeight={700} fontSize={{base:"22px",lg:"28px"}} lineHeight={{base:"32px",lg:"42px"}}>
              Project Overview
            </Text>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
              {project.projectOverview.map((e, i) => (
                <>
                  <Box key={i}>
                    <Text
                      fontWeight={400}
                      fontSize={{base:"16px",lg:"17px"}}
                      lineHeight={{base:"27px",lg:"31px"}}
                      color={"#666666"}
                    >
                      {e}
                    </Text>
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          w={{base:"100%",lg:"85%"}}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"25px"}
          mt={"20px"}
        >
          <Box>
            <Text fontWeight={700} fontSize={{base:"22px",lg:"28px"}} lineHeight={{base:"32px",lg:"42px"}}>
              Tools Used
            </Text>
          </Box>
          <Flex gap={"15px"} flexWrap={{base:"wrap",lg:"none"}}>
            {project.tools.map((e, i) => (
              <>
                <Box key={i}>
                  <Box
                    bg={"#ebebeb"}
                    borderRadius={"7px"}
                    p={"10px 15px 10px 15px"}
                    fontWeight={600}
                    fontSize={"16px"}
                    lineHeight={"24px"}
                    color={"#666666"}
                  >
                    {e}
                  </Box>
                </Box>
              </>
            ))}
          </Flex>
        </Box>
        <Box
          w={{base:"100%",lg:"85%"}}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={"25px"}
          mt={"20px"}
        >
          <Box>
            <Text fontWeight={700} fontSize={{base:"22px",lg:"28px"}} lineHeight={{base:"32px",lg:"42px"}}>
              See Live
            </Text>
          </Box>
          <Box>
            <Flex w={"100%"} gap={"20px"} direction={{base:"column",lg:"row"}}>
              <div class="hvr-float">
                <a href={project.link}>
                <Button
                  _hover={{ bg: "#7843e9", color: "white" }}
                  letterSpacing={"1px"}
                  p={"25px 45px 25px 45px"}
                  textTransform={"uppercase"}
                  bg={"#7843e9"}
                  color={"white"}
                  fontWeight={700}
                  fontSize={"14px"}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 50px;"}
                >
                  PROJECT LINK
                </Button>
                </a>
              </div>
              <div class="hvr-float">
                <Link to='/'>
                <Button
                  _hover={{
                    border: "2px solid #7843e9",
                    color: "black",
                    bg: "",
                  }}
                  letterSpacing={"1px"}
                  p={"25px 45px 25px 45px"}
                  textTransform={"uppercase"}
                  border={"2px solid #7843e9"}
                  color={"black"}
                  fontWeight={700}
                  fontSize={"14px"}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 50px;"}
                  variant={"outline"}
                >
                  GO BACK
                </Button>
                </Link>
              </div>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Project1;
