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
            <a href="https://leetcode.com/RK_rahul12/" target= "_blank" rel="noreferrer">
               <img src={leetcode} alt="" />
            </a>
            </SwiperSlide>
           <SwiperSlide>
           <a href="https://codeforces.com/profile/rahulkumar12345" target= "_blank" rel="noreferrer">
               <img src={codefores} alt="" />
            </a>
           </SwiperSlide>
           <SwiperSlide>
            <a href="https://www.hackerrank.com/rahul9709347233" target= "_blank" rel="noreferrer">
               <img src={hackerrank} alt="" />
            </a>
           </SwiperSlide>
           <SwiperSlide>
           <a href="https://www.codechef.com/users/rahul_kumar_12" target= "_blank" rel="noreferrer">
               <img src={codechef} alt="" />
            </a>
           </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Project