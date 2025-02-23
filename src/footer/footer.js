import React from "react";
import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
      <section className="eye">
        {/* <div className="container flexSB">
          <div className="left row">
            <h1></h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div> */}
      </section>
      <footer className="footer">
        <div className="container padding">
          <div className="box logo">
            <h1 style={{color:"black"}}>EyeQ</h1>
            <span>Eye care clinic</span>
            <p>
            see the World Anew
            </p>

            <CiFacebook />

            <FaXTwitter />
            
            <FaInstagram />
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li><Link to='/team'>About Us</Link></li>
              <li><Link to='/team'>Our Services</Link></li>
              <li><Link to='/team'>Book Appoinment</Link></li>
              <li><Link to='/team'>Contact</Link></li>
            
            </ul>
          </div>
        
          <div className="box last">
           
            <ul>
              <li>
              <FaLocationDot/>  <div style={{paddingLeft:"10px"}}>Thrissur</div>
              </li>
              <li>
              <FaPhoneAlt /> <div style={{paddingLeft:"10px"}}>+91 9112567893</div>
              </li>
              <li>
              <IoIosMail /> <div style={{paddingLeft:"10px"}}> EyeQCare@gmail.com</div> 
              </li>
            </ul>
          </div>
          <div className="box">
            <h3 style={{paddingLeft:"20PX"}}>Hours</h3>
            <ul>
            <li>Monday<b> -</b> Friday <b>⟶ </b>9 AM <b>-</b> 5 PM</li>
            <li>Saturday,Sunday <b>⟶ </b> Closed</li>
             
            </ul>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default Footer;
