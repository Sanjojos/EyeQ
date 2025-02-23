import React from 'react';
import Heading from './Navbar/heading';
import im1 from '../src/images/eyee.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import im7 from '../src/im7.jpg'
import im8 from '../src/im8.jpg'
import im9 from '../src/im9.jpg'
import { Link } from "react-router-dom"
// import test1 from '../src/mat.png'
// import test2 from '../src/eli.png'
// import test3 from '../src/walt.png'
import { IoIosArrowUp } from "react-icons/io";
import { Eye, Glasses, Shield, Activity } from 'lucide-react';
import TestimonialCard from './testimonial';
import { testimonials } from './testimonialData';
import './home.css';

function Home({ onAuthClick }) {
  const services = [
    {
      title: 'Eye Examinations',
      description: 'Comprehensive eye health evaluations using state-of-the-art equipment',
      icon: Eye
    },
    {
      title: 'Vision Correction',
      description: 'Advanced vision correction procedures including LASIK and PRK',
      icon: Glasses
    },
    {
      title: 'Eye Disease Treatment',
      description: 'Treatment for glaucoma, cataracts, and other eye conditions',
      icon: Shield
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency eye care services for urgent situations',
      icon: Activity
    }
  ];
  return (
    <div className='full'  >
      <section className='main'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EyeQ' title='Best for Eye Care'  />
            
          </div>
        </div>
      </section>

      <div className='margin'></div>
    
      <section className='image-txt-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-10'>
              <img src={im1} className='img-fluid' alt='Im'  />
            </div>
            <div className='col-md-6 col-sm-10'>
              <div className='text-content'>
                <h1 style={{fontFamily:"serif"}}><b>About our clinic</b></h1>
                <p style={{fontFamily:"serif"}}><b>At our eye clinic, we are dedicated to providing exceptional care with a focus on your unique vision needs. Utilizing the latest technology and advanced treatments, our experienced team delivers personalized solutions to help you achieve optimal eye health. Trust us to protect and enhance your vision with the highest standard of care</b></p>
          <Link to='/about'><button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 text-sm font-medium">Learn More</button></Link>  
          <button onClick={onAuthClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-sm font-medium">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a comprehensive range of eye care services to meet all your vision needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
      <section className='image-text-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-10'id='im7'>
              <img src={im7} className='img-fluid' alt='Im' />
            </div>
            <div className='col-md-6 col-sm-10' id='text7'>
              <div className='text-content'>
              <br/> <h1><b>A Better Experience</b></h1>
                <p style={{fontSize:"20px",fontFamily:"serif"}}><b> Our team of experts are dedicated to providing our patients with high-quality care so that they receive the best service possible . </b></p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='image-text-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-10'id='text8'>
              <div className='text-content'>
                <h1 style={{fontFamily:"serif"}}><b>Quality Services</b></h1>
                <p style={{fontSize:"20px",fontFamily:"serif"}}><b> Our staff is trained and knowledgeable about the latest procedures, tools, and techniques to properly care for our patients.</b></p>
                
              </div>
            </div>
            <div className='col-md-6 col-sm-10'id='im8'>
              <img src={im8} className='img-fluid' alt='Im' />
            </div>
          </div>
        </div>
      </section>

      <section className='image-text-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-10' id='im9'>
              <img src={im9} className='img-fluid' alt='Im' />
            </div>
            <div className='col-md-6 col-sm-10' id='text9'>
              <div className='text-content'>
              <br/><h1 style={{fontFamily:"serif"}}><b>Individual Approach</b></h1>
                <p style={{fontSize:"20px",fontFamily:"serif"}}><b>  We focus on creating customized treatment plans for each of our patients based on their individual needs.</b></p>
               
              </div>
            </div>
          </div>
        </div>
      </section>


     
        <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Patient Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear what our patients have to say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
 <div className='container' style={{position:"relative",top:"-5px"}} id='faq'>
<div className='row'>
<div className='col-lg-7' style={{paddingTop:"13px"}}>
  <h2 style={{fontFamily:"serif"}}><b>Frequently asked questions</b></h2>




<div className="faq">
<div className="faq-question">
<input id="q1" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q1" className="panel-title" style={{fontFamily:"serif"}}>What should I expect on my first visit?</label>
<div className="panel-content"  style={{fontFamily:"serif"}}>Eye exams are generally painless for most people. We recommend informing your optometrist of any existing conditions or concerns before your first session  </div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"20px"}}>
<input id="q2" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q2" className="panel-title"  style={{fontFamily:"serif"}}>Do you offer laser eye surgery?</label>
<div className="panel-content"  style={{fontFamily:"serif"}}>Yes, we offer various types of eye surgery including lasik, please see our offered procedures for more information.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q3" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q3" className="panel-title"  style={{fontFamily:"serif"}}>What can I expect during cataract surgery?</label>
<div className="panel-content"  style={{fontFamily:"serif"}}>Cataract surgery is more straightforward than people think, see how cataract surgery can do for you and how you can prepare for your procedure here.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q4" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q4" className="panel-title"  style={{fontFamily:"serif"}}> What is a corneal transplant, and when is it necessary?</label>
<div className="panel-content"  style={{fontFamily:"serif"}}> A corneal transplant involves replacing a damaged or diseased cornea with healthy donor tissue. It’s necessary for conditions like keratoconus, corneal scarring, or swelling that severely affect vision.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q5" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q5" className="panel-title" style={{fontFamily:"serif"}}>Do you accept insurance for eye exams and treatments?</label>
<div className="panel-content"  style={{fontFamily:"serif"}}> Yes, we accept most major insurance plans. Please contact our office to verify your coverage and any potential out-of-pocket expenses</div>
</div>
</div>


</div>


</div>
<section className="contact-form-section" style={{ marginTop: '50px',backgroundColor:"lightblue" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"  style={{fontFamily:"serif"}}>Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{fontFamily:"serif"}}>Email address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label" style={{fontFamily:"serif"}}>Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{fontFamily:"serif"}}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
</div>


    </div>
  );
}

export default Home;
