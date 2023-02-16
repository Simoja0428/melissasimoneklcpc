import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#000", marginRight: "2rem"}} />
                    <div>
                        <p>11516 183rd pl, suite NE, Orland Park, IL. 60467</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4><FaPhone size={20} style={{ color:"#000", marginRight: "2rem"}} /> 708-285-4116</h4>
                </div>
                <div className = "mail">
                    <h4><FaMailBulk size={20} style={{ color:"#000", marginRight: "2rem"}} /> <a href="mailto:melissa.simonek@gmail.com" style={{color:"#000"}}target="_blank">melissa.simonek@gmail.com</a></h4>
                </div>
            </div>
            <div className="right">
                <p>
                    The following website serves the sole purpose of being an informational 
                    website that is meant to provide users with a place to seek out 
                    more information on receiving theraputic services through Melissa Simonek 
                    LCPC. This website is solely operated and owned by Melissa Simonek LCPC.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;