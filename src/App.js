import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Project from "./Components/Project/Project";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext } from "react";
import Contact from "./Components/Contact/Contact";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
       style={{
         background : darkMode ? 'black': '',
         color : darkMode ? 'white': '',
       }}>
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Works/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    

  );
};

export default App;
