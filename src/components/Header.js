import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Spiral } from 'hamburger-react';
import { motion } from "framer-motion"




function Header() {

    // variants
    const fade_down = {
        initial:{
            translateY:-200,
            opacity:0,
        },
        animate:{
            translateY:0,
            opacity:1,

            transition:{
                duration:0.5,
            }
        }

    }

    
    // usestates and scrool animation

    const [navbar, setNavbar] = useState(false);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [isopen, setOpen] = useState(false);

    function MenuBtn() {
        setShowMediaIcons(showMediaIcons => !setShowMediaIcons);
        setOpen(isopen => !setOpen)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeBackground);

    return (
        <motion.div variants={fade_down} initial="initial" animate="animate" className={navbar ? 'header active' : "header"}>

            <div className='header_content'>
                <Link to='/'>
                    <h1 className="header__logo">DaresAgro</h1>
                </Link>
                <div onClick={MenuBtn} className={
                    showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>

                    <Link to='/'  >
                        <div className="header__option">
                            <h1>Home</h1>
                        </div>
                    </Link>
                    <Link to='/RegisterAsFarmer'  >
                        <div className="header__option">
                            <h1>Register as farmer</h1>
                        </div>
                    </Link>

                    <Link to='/RegisterAsCustomer' >
                        <div className="header__option">
                            <h1>Register as customer</h1>
                        </div>
                    </Link>
                    {/* <Link to='/Register' >
                        <div className="header__option">
                            <h1>Sign up</h1>
                        </div>
                    </Link> */}
                </div>
            </div>


            <div className="hambuger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><Spiral color='black' size={25}
                    toggled={isopen} toggle={setOpen} /></a>
            </div>
        </motion.div>
    )
}

export default Header

