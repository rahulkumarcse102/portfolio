import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy2 from '../../img/boy2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {useContext } from "react";

const Intro = () => {
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
            <button className="button i-button"> Hire Me</button>
            <div className="i-icons">
                <a href="https://github.com/rahulkumarcse102">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/rahul-kumar-57587a200/">
                <img src={LinkedIn} alt="" />
                </a>
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy2} alt="" />
            <img src={glassesimoji} alt="" />
            <div className='demo' style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='CP' txt2='Enthusiastic'/>
            </div>
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