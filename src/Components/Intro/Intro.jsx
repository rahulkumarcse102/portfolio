import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Facebook from '../../img/Facebook.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import rahul from '../../img/rahul1.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {useContext } from "react";
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                
                <span style={{color: darkMode? 'white' : ''}}>Hi! I Am </span>
                <span>Rahul Kumar </span>
                <span>Frontend Developer with high level of
                    experience in Web Designing, CP enthusiastic
                </span>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button i-button">
                    Hire Me
            </button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/rahulkumarcse102" target= "_blank" rel="noreferrer">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/rahul-kumar-57587a200/" target= "_blank" rel="noreferrer">
                <img src={LinkedIn} alt="" />
                </a>
                <img src={Facebook} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={rahul} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <motion.div
            initial={{top: '-4%', left:'74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
             style={{top: '-4%', left: '68%'}}
             className='floating-div'
             >
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
            initial={{top: '9rem', left:'18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
             style={{top: '18rem', left: '0rem'}}
             className='floating-div'>
                <FloatingDiv image={thumbup} txt1='CP' txt2='Enthusiastic'/>
            </motion.div>
            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238,210,255)"}}></div>
            <div className="blur"
            style={{
                background: '#6495ED',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}
            ></div>
        </div>
    </div>
  )
}

export default Intro