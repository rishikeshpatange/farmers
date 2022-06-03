import React from 'react';
import "./Banner.css";
import { motion } from "framer-motion"

function Banner() {


  const banner_fade_up ={

    initial:{
      translateY:-400,
      opacity:0,
    },
    animate:{
      translateY:0,
      opacity:1,
    }

  }

  return (
    <div className='banner'>
        <div className="banner_content">
            <motion.h1 variants={banner_fade_up} initial="initial" animate="animate" transition={{ duration:1, delay:0.2}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, similique.</motion.h1>
            <motion.p variants={banner_fade_up} initial="initial" animate="animate" transition={{duration:1,delay:0.3}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime recusandae dicta ex autem quos qui.</motion.p>
            <motion.button variants={banner_fade_up} initial="initial" animate="animate" transition={{duration:1,delay:0.2}}>Learn More</motion.button>
        </div>
        <div className="banner_img">
            <h1>img</h1>
        </div>
    </div>
  )
}

export default Banner