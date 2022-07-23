import React from 'react';
import './Fotter.css';
import { FaInstagram } from 'react-icons/fa';

function Fotter() {
    return (
        <div className='fotter'>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F5F5" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,181.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className='fotter_big'>

            <div className="fotter_container">
                <div className="fotter_tittle">
                    <h1>DaresAgro</h1>
                    <p>About Us</p>
                </div>
                <div className="fotter_content">
                    <h1>Resources</h1>
                    <p>Contact</p>
                    <p>Media</p>

                </div>
                {/* <div className="fotter_content">
                    <h1>Connect With Us</h1>
                    <span className='social_media'>
                        <span>
                        <FaInstagram/>
                        </span>
                        <span>
                        <FaInstagram/>
                        </span>
                        <span>
                        <FaInstagram/>
                        </span>
                    
                    </span>

                </div> */}
            </div>
            <div className='fotter_right'>
                <span className='line'></span>
                <p className='fotter_p'>© 2022  All rights reserved.</p>
            </div>
            </div>

            
        </div>
    )
}

export default Fotter