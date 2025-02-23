import React from "react"
import { GiEyeShield } from "react-icons/gi";
function Nav() {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            
            <h1>EyeQ <GiEyeShield /> </h1>
            <span style={{color:"white"}}>See the World Anew</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav