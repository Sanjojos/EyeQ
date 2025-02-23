import React from 'react'
import './About.css'
import StaffCard from './ourstaffDesign'

import { staff } from './ourstaff';
const About = () => {
  return (
    <div>
      <section className='About'>
        <div className='container'>
          <div className='row'>
            <h1 style={{textAlign:"left",margin:"0",padding:"0",fontSize:"100px",color:"black"}}>About EyeQ</h1>
          </div>
        </div>
      </section><br/>
      <section className='img-text'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>
                
                <p style={{fontSize:"20px",fontFamily:"serif"}}>At our eye clinic, we are dedicated to providing exceptional care with a focus on your unique vision needs. Utilizing the latest technology and advanced treatments, our experienced team delivers personalized solutions to help you achieve optimal eye health. Whether you're seeking routine eye exams, corrective surgeries, or specialized care, trust us to protect and enhance your vision with the highest standard of care. Your vision is our priority, and we're committed to guiding you every step of the way on your journey to clearer sight. With a compassionate approach and a commitment to excellence, we ensure your eyes receive the best possible care they deserve.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className='staff'>
            <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
               Our staff
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Hear what our staff say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((testimonial, index) => (
                <StaffCard
                  key={index}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
        </section>
     </div>
    <section className="contact-form-section" style={{ marginTop: '-350px',backgroundColor:"lightblue"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section><br/>
    </div>
    
  )
}

export default About;
