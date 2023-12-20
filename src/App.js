
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import ScrollToTop from './Function/ScrollToTop';
import { useRef } from 'react';
import MoveToTop from './Components/MoveToTop';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
      <MoveToTop/>
      <FloatingWhatsApp phoneNumber='+917004190523' accountName='Sahil' notificationSound={true} avatar='https://sahilkumar26244.netlify.app/static/media/my.a3eb1c897ad93328e030.png' chatMessage='Hello there! 🤝, How can i help?' darkMode={true} allowClickAway={true} />
    </div>
  );
}

export default App;
