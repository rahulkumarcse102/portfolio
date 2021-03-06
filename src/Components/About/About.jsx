import React from 'react'
import './About.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import {useContext } from "react";
import {motion} from 'framer-motion';

const About = () => {
    const transition = {duration: 1, type : 'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id='About'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white': ''}}>My Awesome </span>
            <span>Services</span>
            <span><h3>Good problem solving skills
                <br/>
                with 3+ years of Experience.
                <br/>
                Intrested in DSA</h3>
            </span>
            <a href={Resume} download>
                <div className="button a-button">Download CV</div>
            </a>
            
            <div className="blur a-blur1" style={{background: "ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
            whileInView={{left : '14rem'}}
            initial={{left: '25%'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card
                emoji ={HeartEmoji}
                heading ={'Backend'}
                detail ={"MySQL, NodeJs, Oracle, Database Management System"}
                />
            </motion.div>
            {/* second card */}
            <motion.div
            whileInView={{top: '10rem', left : '30rem'}}
            initial={{left: '25%'}}
            transition={transition}
            style={{top: "10rem", left: "30rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"Frontend"}
                    detail={"Html, Css, JavaScript, React, Bootstrap"}
                />
            </motion.div>
            {/* third card */}
            <motion.div
            whileInView={{top: '19rem',left : '5rem'}}
            initial={{left: '25%'}}
            transition={transition}
            style={{top: "19rem", left: "5rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Programmer"}
                    detail={"C++, Java, C, Python, C#, .........."}
                />
            </motion.div>
            <div className="blur a-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default About