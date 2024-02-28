import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button, Circle } from '@chakra-ui/react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function MoveToTop() {

    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
    {isVisible && (
        <div>
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='100px'
          right={['40px', '40px']}
          zIndex={3}>
          
          <Circle cursor={"pointer"} bg={"black"} color={"white"} p={"10px"} border={"1px solid black"}>
            <MdKeyboardDoubleArrowUp style={{fontSize:"25px",fontWeight:"bold"}}/>
          </Circle>
        </Box>
        </div>
      )}
    </>
  )
}

export default MoveToTop