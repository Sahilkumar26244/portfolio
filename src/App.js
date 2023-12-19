
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import ScrollToTop from './Function/ScrollToTop';
import { useRef } from 'react';

function App() {

  const Home = useRef(null)
  const About = useRef(null)
  const Skills = useRef(null)
  const Project = useRef(null)
  const Contact = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    } else {
      // Handle the case where the ref is not available
      console.error('Ref is not available');
      // Optionally, you could scroll to the top of the page or do something else
      // Example: window.scrollTo(0, 0);
    }
  };
  

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} Home={Home} About={About} Skills={Skills} Project={Project} Contact={Contact} />
      <AllRoutes Home={Home} About={About} Skills={Skills} Project={Project} Contact={Contact} />
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
