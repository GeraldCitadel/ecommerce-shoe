import React from 'react'
import "./Offers.css"
import { Link } from 'react-router-dom'
import Shoe17 from "../Asset/Shoe17.jpg"

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
         <h1>Exclusive <br className='offers-break' />Offers For You</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <Link><button>Check Now</button></Link>
      </div>
      <div className="offers-right">
         <img src={Shoe17} alt="" />
      </div>
    </div>
  )
}

export default Offers