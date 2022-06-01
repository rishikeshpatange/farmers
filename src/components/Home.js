import React from 'react'
import "./Home.css"
import Banner from './Banner'
import HomeAbout from './HomeAbout'
import HomeDialouge from './HomeDialouge'
import Opportunities from './Opportunities'

function Home() {
  return (
    <div className='home'>
        <Banner/>
        <HomeAbout/>
        <HomeDialouge/>
        <Opportunities/>
      
        
    </div>
  )
}

export default Home