import React from 'react'
import './Hero.css'
import Header from "../Asset/canvas.png"
// import arrow_icon from "../Asset/20240506_090704.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         <div>
            <div className="hand-hand-icon">
               <p>new</p>
               {/* <img src={Header} alt="" /> */}
            </div>
               <p>collections</p>
               <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <a href='#latest'>
                Latest Collection
            </a>
            {/* <img src={arrow_icon} alt="" /> */}
         </div>
      </div>
      <div className="hero-right">
          <img src={Header} alt="" />
      </div>
    </div>
  )
}

export default Hero