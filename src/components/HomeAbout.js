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
            <p>We make it easy to grow organic, high quality crops with less tillage. With our optimal crop recipe, organic production and state-of-the-art technological systems, we deliver high value produce to your door step.</p>
            {/* <p>The world has a big enough food safety problem with the current system, but the food supply is also not enough to feed the world. We are creating a better answer to these problems. Our technology solution helps farmers become more profitable while growing better quality food.</p> */}
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