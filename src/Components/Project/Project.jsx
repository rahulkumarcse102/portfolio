import React from 'react'
import './Project.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'

const Project = () => {
  return (
    <div className="project">
        {/* Recent Projects */}
        <span>Recent Projects </span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='project-slider'
        >
           <SwiperSlide>
               <img src={Sidebar} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={Ecommerce} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={HOC} alt="" />
           </SwiperSlide>
           <SwiperSlide>
               <img src={MusicApp} alt="" />
           </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Project