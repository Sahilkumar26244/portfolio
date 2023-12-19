import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import data from "../api/data";

function Projects({Project}) {
  
  return (
    <div ref={Project}>
    <Box w={"100%"} pt={"90px"} pb={"90px"} background={"white"}>
    <Box pb={"10px"}>
      <Text
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={{base:"30px",lg:"38px"}}
        lineHeight={"60px"}
        fontWeight={700}
      >
        my projects
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
        Here you will find some of the personal projects that I
        created with each project containing its own case study!
      </Text>
    </Box>

    <Box p={{base:"15px 0px 15px 0px",lg:"20px 80px 20px 80px"}} display={"flex"} flexDirection={"column"} gap={{base:"60px",lg:"30px"}}>
      {data?.map((project,index) => (
        <>
          <Flex key={index} w={{base:"90%",lg:"90%",xl:"70%"}} m={"auto"} gap={{base:"0px",sm:"0px",md:"30px",lg:"40px",xl:"40px"}} direction={{base:"column",lg:"row"}}>
            <Box w={{base:"100%",lg:"50%",xl:"40%"}}>
              <Box>
                <Image w={"100%"} h={"100%"} src={project.img} />
              </Box>
            </Box>
            <Box
            p={{base:"",lg:"140px 20px 40px 20px",xl:"240px 10px 40px 20px"}}
              w={{base:"100%",lg:"45%"}}
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
            >
              <Text fontWeight={700} fontSize={{base:"22px",lg:"28px"}} textAlign={{base:"center",lg:"left"}}>
                {project.title}
              </Text>
              <Text
                fontWeight={400}
                fontSize={{base:"15px",lg:"18px"}}
                lineHeight={{base:"26px",lg:"31px"}}
                color={"#666666"}
                textAlign={{base:"center",lg:"left"}}
              >
                {project.description}
              </Text>
              <Box mt={{sm:"20px",lg:"0px"}} display={"flex"} justifyContent={{base:"center",lg:"flex-start"}}>
                <div class="hvr-float">
                  <Link to={`/project/${project.id}`}>
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
                    Case Study
                  </Button>
                  </Link>
                </div>
              </Box>
            </Box>
          </Flex>
        </>
      ))}
    </Box>
  </Box>
    </div>
  );
}

export default Projects;
