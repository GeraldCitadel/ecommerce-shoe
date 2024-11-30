import React from 'react'
import "./Footer.css"
import logo from "../Asset/logo.png"
import Instagram_Icon from "../Asset/Instagram_icon.png"
import Facebook_Icon from "../Asset/Facebook_icon.png"
import WhatsApp_Icon from "../Asset/WhatsApp_icon.png"
import Youtube_Icon from "../Asset/Youtube_icon.png"
import X_Icon from "../Asset/X_icon.png"
import Git_Icon from "../Asset/Git_icon.png"
import Linkedin_Icon from "../Asset/Linkedin_icon.png"

const Footer = () => {
const d = new Date()
const year = d.getFullYear()

  return (
      <div className='footer'>
         <div className="footer-logo">
            <img src={logo} alt="" />
            <p>CitShop</p>
         </div>
         <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
            <div className="footer-icon-container">
               <img src={WhatsApp_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={X_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={Facebook_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={Instagram_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={Youtube_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={Linkedin_Icon} alt="" />
            </div>
            <div className="footer-icon-container">
               <img src={Git_Icon} alt="" />
            </div>
         </div>
         <div className="footer-copyright">
            <hr />
            <p>Copyright @ CitShop {year} - All Rights Reserved</p>
         </div>
      </div>
   )
}

export default Footer