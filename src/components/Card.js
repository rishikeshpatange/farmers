import React, { useEffect } from 'react';
import "./Card.css";
import "aos/dist/aos.css";
import Aos from 'aos';

function Card({ num, title, discription }) {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className='bannerBox bannerBox1'>
      <div className='card_content'>
      <h1 >{num}</h1>
      <h2>{title}</h2>
      <p>{discription}</p>
      </div>

    </div>
  )
}

export default Card