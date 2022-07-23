import React ,{useState} from 'react';
import "./Banner.css";
import { motion } from "framer-motion";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth} from "../Database/firebase"

function Banner() {


  const banner_fade_right = {

    initial: {
      translateY: 70,
      opacity: 0,
    },
    animate: {
      translateY: 0,
      opacity: 1,
    }

  }
  const [user, SetUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser)

  })
  const logout = async () => {

    await signOut(auth);

}

  return (
    <div className='banner'>
      <div className="banner_content">
        {/* <div className="logout_container">
          <h1>Hello:{user?.email}</h1>
          <button onClick={logout}>Logout</button>
        </div> */}
        <motion.h1 variants={banner_fade_right} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.0 }}>Enabling productivity of farm land, farmer incomes and better quality food for everyone</motion.h1>
        <motion.p variants={banner_fade_right} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.0 }}>
          Farming is tough profession and can be unprofitable without knowledge and skills. Our solution, and end-to-end farm managment monitors remotely and helps farmer grow
        </motion.p>
        <motion.button variants={banner_fade_right} initial="initial" animate="animate" transition={{ delay: 0.0 }}>Learn More</motion.button>
      </div>
      <div className="banner_img">
        <h1>img</h1>
      </div>
    </div>
  )
}

export default Banner