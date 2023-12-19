import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import ContactMe from '../Components/Contact'
import LiveProjects from '../Components/LiveProjects'

function Home({Home,About,Skills,Project,Contact}) {
  return (
    <>
        
        <HeroSection Home={Home}  />
        <AboutMe About={About} />
        <LiveProjects Project={Project} />
        <Projects  />
        <ContactMe Contact={Contact} />
        
    </>
  )
}

export default Home