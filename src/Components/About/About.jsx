import React from 'react'
import './About.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';


const About = () => {
  return (
    <div className="about">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome </span>
            <span>Services</span>
            <span>This is about me
                <br/>
                wait likhenge soch k
            </span>
            <a href={Resume} download>
                <div className="button a-button">Download CV</div>
            </a>
            
            <div className="blur a-blur1" style={{background: "ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji ={HeartEmoji}
                heading ={'Backend'}
                detail ={"MySQL, NodeJs, Oracle, Database Management System"}
                />
            </div>
            {/* second card */}
            <div style={{top: "10rem", left: "30rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"Frontend"}
                    detail={"Html, Css, JavaScript, React"}
                />
            </div>
            {/* third card */}
            <div style={{top: "19rem", left: "5rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Programmer"}
                    detail={"C++, Java, C, Python, C#"}
                />
            </div>
            <div className="blur a-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default About