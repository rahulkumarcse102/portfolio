import React from "react";
import "./Works.css";
import cpp from "../../img/c++.PNG";
import c from "../../img/c.PNG";
import java from "../../img/java.PNG";
import html from "../../img/html.PNG";
import css from "../../img/css.PNG";
import { themeContext } from '../../Context';
import {useContext } from "react";
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';


const Works = () => {
    // const transition = {duration: 1, type : 'spring'}
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="awesome">
            <span style={{color: darkMode ? 'white': ''}} >Works on these</span>
            <span> Skills and Companies</span>
            <span><h5>This is about me</h5>
                <br/>
                Software Developer Internsip at
                <br/>
                <h3>Cuebiz Technologies <br/>Private Limited</h3>
                <br/>
                works and some DSA oriented with basics of C#.
                <br/>
                Team working Experience
                <br/>
            </span>
            
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <div className="button a-button">
                    Hire Me
            </div>
            </Link>
            
            <div className="blur a-blur1" style={{background: "ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={cpp} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={c} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={java} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={html} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={css} alt="" />
                </div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Works;