import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Spiral } from 'hamburger-react';




function Header() {

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
        <div className={navbar ? 'header active' : "header"}>

            <div className='header_content'>
                <Link to='/'>
                    <h1 className="header__logo">LOGO</h1>
                </Link>
                <div onClick={MenuBtn} className={
                    showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>

                    <Link to='/'  >
                        <div className="header__option">
                            <h1>Home</h1>
                        </div>
                    </Link>
                    <Link to='/about'  >
                        <div className="header__option">
                            <h1>Register as farmer</h1>
                        </div>
                    </Link>

                    <Link to='/contact' >
                        <div className="header__option">
                            <h1>Register as coustomer</h1>
                        </div>
                    </Link>
                </div>
            </div>


            <div className="hambuger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><Spiral color='black' size={25}
                    toggled={isopen} toggle={setOpen} /></a>
            </div>
        </div>
    )
}

export default Header

