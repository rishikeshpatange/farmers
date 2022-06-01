import React from 'react';
import "./Card.css"

function Card({num, title, point1, point2, point3, point4}) {
  return (
    <div className='bannerBox bannerBox1'>
           <h1 >{num}</h1>
        <h2>{title}</h2>
        <p>{point1}</p>
        <p>{point2}</p>
        <p>{point3}</p>
        <p>{point4}</p>
    
    </div>
  )
}

export default Card