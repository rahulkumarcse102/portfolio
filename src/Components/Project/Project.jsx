import React from 'react'
import './Project.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import leetcode from "../../img/leetcode.PNG";
import codefores from "../../img/codeforces.PNG";
import hackerrank from "../../img/hackerrank.PNG";
import codechef from "../../img/codechef.PNG";
import 'swiper/css';
import { themeContext } from '../../Context';
import {useContext } from "react";

const Project = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id = 'Projects'>
        {/* Recent Projects */}
        <span style={{color: darkMode ? 'white': ''}}>Coding Profiles </span>
        <span>DSA and others</span>

        {/* Slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='project-slider'
        >
           <SwiperSlide>
               <img src={leetcode} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={codefores} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={hackerrank} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={codechef} alt="" />
           </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Project