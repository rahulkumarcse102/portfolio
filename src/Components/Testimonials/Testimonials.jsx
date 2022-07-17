import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import ProfilePic1 from "../../img/profile1.jpg";
import ProfilePic2 from "../../img/profile2.jpg";
import ProfilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'


const Testimonials = () => {
    const clients = [
        {
            img: ProfilePic1,
            review:
            "nkfj nfnknk nfnns  jgnskjnkfmk  msnkfhn mndknfngn mb kknkgnb f  d jqnjeb  nfgn fn fngknknknf   gjnjqr  n jgnjnn rm ngnknwr mcnknnq3rkjaihr rmn 3wktghnnn awgjnibnngnaknknrae mndkcqnfgj dmfnfdvvbn nm,bn,vbnbnvbnm nfdnhn mnerf  r whfjeooiqtnngngng jkjgk g ojwjjgw kokk",
        },
        {
            img: ProfilePic2,
            review:
            "nkfj nfnknk nfnns  jgnskjnkfmk  msnkfhn mndknfngn mb kknkgnb f  d jqnjeb  nfgn fn fngknknknf   gjnjqr  n jgnjnn rm ngnknwr mcnknnq3rkjaihr rmn 3wktghnnn awgjnibnngnaknknrae mndkcqnfgj dmfnfdvvbn nm,bn,vbnbnvbnm nfdnhn mnerf  r whfjeooiqtnngngng jkjgk g ojwjjgw kokk",
        },
        {
            img: ProfilePic3,
            review:
            "nkfj nfnknk nfnns  jgnskjnkfmk  msnkfhn mndknfngn mb kknkgnb f  d jqnjeb  nfgn fn fngknknknf   gjnjqr  n jgnjnn rm ngnknwr mcnknnq3rkjaihr rmn 3wktghnnn awgjnibnngnaknknrae mndkcqnfgj dmfnfdvvbn nm,bn,vbnbnvbnm nfdnhn mnerf  r whfjeooiqtnngngng jkjgk g ojwjjgw kokk",
        },
        {
            img: ProfilePic4,
            review:
            "nkfj nfnknk nfnns  jgnskjnkfmk  msnkfhn mndknfngn mb kknkgnb f  d jqnjeb  nfgn fn fngknknknf   gjnjqr  n jgnjnn rm ngnknwr mcnknnq3rkjaihr rmn 3wktghnnn awgjnibnngnaknknrae mndkcqnfgj dmfnfdvvbn nm,bn,vbnbnvbnm nfdnhn mnerf  r whfjeooiqtnngngng jkjgk g ojwjjgw kokk",
        }

    ]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional work </span>
            <span>Me.. </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* slider */}

        <Swiper
        modules={[Pagination]}
        slidesPerView = {1}
        pagination = {{clickable: true}}

        
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials