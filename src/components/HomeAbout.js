import React from 'react';
import './HomeAbout.css';
import { motion } from "framer-motion"


function HomeAbout() {

  const circle_animation = {
    initial: {},
    animate: {
        y: [50, 0, 50],
        transition: {
            duration: 2, ease: "linear", repeat: Infinity,
            delay: 1
        }
    },
  }

  return (
    <div className='homeabout'>
      <motion.div variants={circle_animation}
      initial="initial"
      animate="animate" className='home_about_circle'>
        {/* <img src="/Images/green_circle.png" alt="" /> */}
      </motion.div>
        <div className="home_about_content">
            <motion.h1 variant={circle_animation}
      initial="initial"
      animate="animate">About Us</motion.h1>
            <p>Lorem ips
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, expedita? um dolor sit amet consectetur adipisicing elit. Magni ratione rem aperiam beatae totam quo inventore expedita quisquam ipsa. Quae!</p>
            <button>Know More</button>
        </div>
        <div className="home_about_img">
            <h1>Logo</h1>
            <h1>img</h1>
        </div>
        
    </div>
  )
}

export default HomeAbout