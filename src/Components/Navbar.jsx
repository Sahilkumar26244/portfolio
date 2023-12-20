'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Circle,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import my from "../assets/my.png"
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function WithSubnavigation({scrollToSection,Home,About,Skills,Project,Contact}) {
  const { isOpen, onToggle } = useDisclosure()



  return (
    <Box>
      <Flex 
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={{base:'80px',sm:"80px",md:"80px",lg:'95px'}}
        py={{ base: 1 }}
        px={{ base: 4 , lg:10 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'} position={"fixed"} w={"100%"} zIndex={1000} >
        
        <Flex justify={{ base: 'center', md: '' }} w={"100%"} >
            <Flex justifyContent={"space-between"} w={"100%"} pl={"20px"}>
                <Link to='/'>
                <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                    <Image borderRadius={"50%"} w={{base:"20%",sm:"18%",md:"15%",lg:"8%"}} src={my} _hover={{color:"#7843e8",cursor:"pointer"}} />
                    <Text textTransform={"uppercase"} fontSize={{base:"10px",sm:"13px",md:"15px",lg:"20px"}} fontWeight={"bold"} _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>Sahil Kumar</Text>
                </Box>
                </Link>
            </Flex>
          <Flex display={{ base: 'none',sm:"none", md: 'none',lg:"flex" }} w={"100%"} justifyContent={"flex-end"}>
            <DesktopNav scrollToSection={scrollToSection} Home={Home} About={About} Skills={Skills} Project={Project} Contact={Contact}   />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex',sm:"flex", md: 'flex',lg:"none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav scrollToSection={scrollToSection} Home={Home} About={About} Project={Project} Contact={Contact} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({scrollToSection,Home,About,Skills,Project,Contact}) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <>
    <Flex fontWeight={700} color={"black"} w={{lg:"80%",md:"70%"}} justifyContent={"space-around"} alignItems={"center"} fontSize={{base:"",lg:"16px"}} textTransform={"uppercase"}>
          <Box _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>
            <div class='hvr-wobble-horizontal'>
            <Text onClick={() => scrollToSection(Home)} cursor={"pointer"} >
                  <Link to='/'>
                  Home
                  </Link>
            </Text>
            </div>
              
          </Box>
          <Box _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>
            <div class='hvr-wobble-horizontal'>
            <Text onClick={() => scrollToSection(About)} cursor={"pointer"}>
                  About
              </Text>
            </div>
              
          </Box>
          <Box _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>
            <div class='hvr-wobble-horizontal'>
            <Text onClick={() => scrollToSection(About)} cursor={"pointer"}>
                  Skills
              </Text>
            </div>
              
          </Box>
          <Box _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>
            <div class='hvr-wobble-horizontal'>
            <Text onClick={() => scrollToSection(Project)} cursor={"pointer"}>
                  Projects
              </Text>
            </div>
              
          </Box>
          <Box _hover={{color:"#7843e8",cursor:"pointer",transition:"0.5s"}}>
            <div class='hvr-wobble-horizontal'>
            <Text onClick={() => scrollToSection(Contact)} cursor={"pointer"}>
                  Contact
              </Text>
            </div>
              
          </Box>
        </Flex>
    </>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = ({scrollToSection,Home,About,Project,Contact}) => {
  return (
    <Stack border={"1px solid red"} position={"fixed"} w={"100%"} zIndex={2} h={{base:"270px",sm:"290px",md:"320px",lg:"",xl:""}} bg={useColorModeValue('white', 'gray.800')} p={5} display={{ lg: 'none' }} mt={{base:"65px",sm:"60px",md:"80px",lg:""}}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} scrollToSection={scrollToSection} Home={Home} About={About} Project={Project} Contact={Contact}  />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href ,scrollToSection,Home,About,Project,Contact}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle} >
      <Box
        py={4}
        as="a"
        onClick={() => scrollToSection(label)}
        justifyContent="space-between"
        alignItems="center"
        
        _hover={{
          textDecoration: 'none',
        }} borderBottom={"1px solid #edf2f7"}>
        <Text fontWeight={700} fontSize={{base:"10px",sm:"12px",md:"17px",lg:"17px",xl:"17px"}} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}



const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#project',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]