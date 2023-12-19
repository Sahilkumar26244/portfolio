import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import background from "../assets/background.svg";

function Contact({Contact}) {
  return (
    <>
      <div ref={Contact} >
      <Box backgroundImage={background} w={"100%"} pt={{ base: 50, lg: 100 }} h={{base:"900px",lg:"1000px"}}>
        <Box pb={"20px"} w={{ base: "100%", lg: "100%" }}>
          <Text
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={{ base: "30px", lg: "38px" }}
            lineHeight={"40px"}
            fontWeight={800}
          >
            contact
          </Text>
        </Box>
        <Box
            w={{ base: "5%", lg: "2%" }}
            m={"auto"}
            border={"3px solid #7843e9"}
            borderRadius={"5px"}
        ></Box>
        <Box w={{ base: "90%", lg: "52%" }} m={"auto"} pt={"15px"} pb={"80px"}>
            <Text
            textAlign={"center"}
            fontSize={{ base: "14px", lg: "20px" }}
            lineHeight={{base:"20px",lg:"32px"}}
            fontWeight={450}
            color={"#666"}
            >
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </Text>
        </Box>

        <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} w={{base:"90%",lg:"55%",xl:"40%"}} m={"auto"} bg={"white"} borderRadius={"5px"} p={"30px"}>
            <Box color={"#666666"} display={"flex"} flexDirection={"column"} gap={"20px"} fontSize={"14px"} fontWeight={700}>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Text>Name</Text>
                    <Input p={"20px"} bg={"#f0f0f0"} variant={"unstyled"} placeholder="Enter Your Name" />
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Text>Email</Text>
                    <Input p={"20px"} bg={"#f0f0f0"} variant={"unstyled"} placeholder="Enter Your Email" />
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Text>Message</Text>
                    <Textarea h={"200px"} p={"20px"} bg={"#f0f0f0"} variant={"unstyled"} placeholder="Enter Your Message" />
                </Box>
                <Box display={"flex"} justifyContent={{base:"center",lg:"flex-end"}}>
                    <div class="hvr-float">
                        <Button _hover={{bg:"#7843e9",color:"white"}} textTransform={"uppercase"} bg={"#7843e9"} color={"white"} fontSize={"16px"} fontWeight={700} p={"30px 70px 30px 70px"}>Submit</Button>
                    </div>   
                </Box>
            </Box>
        </Box>
      </Box>
      </div>
    </>
  );
}

export default Contact;
