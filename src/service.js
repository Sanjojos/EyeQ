import React from 'react'
import './service.css'
const Service = () => {
  return (
    <div style={{paddingBottom:"50px"}}>
      <section className='service'>
        <div className='container'>
          <div className='row'>
            <h1 style={{textAlign:"left",margin:"0",padding:"0",fontSize:"100px",fontFamily:"serif",color:"black"}}>Our Services</h1>
          </div>
        </div>
      </section><br/>
      <section className='img-texts'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>
              <h1>Cataract Surgery</h1>
              <h2>Symptoms</h2>
            
                <ul style={{fontFamily:"serif",fontSize:"20px"}}>
                    <li>You see glare or halos around lights, especially at night</li>
                    <li>You are having increasing difficulty seeing at night when you drive</li>
                    <li> You can no longer see well enough to read or watch TV.
                    Colors appear faded and/or you have noticed blurry vision</li>
                </ul>
                <h2>Surgery procedures</h2>
                <p style={{fontSize:"20px",fontFamily:"serif"}}>Cataract surgery with EyeQ is a relatively simple process that takes about 30 minutes. If you have cataracts in both eyes, you’ll need two appointments as only one eye is done during an individual surgery.

                                                        During the surgery, you will be given numbing drops and medication to help you relax. For this reason, you’ll need to have a second driver with you in order to drive you home. Cataract eye surgery involves removing the discolored, cloudy lens of the eye and replacing it with an artificial lens that contains your glasses or contact lens prescription. The new lens can contain a fixed or accommodating mono-focal lens, a multi-focal lens or a lens that corrects for astigmatism. This means that once your surgery is complete, you may not need to wear corrective lenses.

                                                        A follow-up appointment will be scheduled the next day to test your eyes and ensure they are healing correctly. If you need cataract removal in your other eye, the second appointment is usually scheduled a few weeks after the first eye surgery in order to give the initial eye time to heal..</p>
             <h1>Lasik Surgery</h1>
             <p style={{fontSize:"20px",fontFamily:"serif"}}>Are you looking for a permanent way to correct your vision so that you no longer have to wear glasses or contact lenses? LASIK (Laser in-situ Keratomileusis) can surgically correct your vision so that you see clearly without the use of corrective lenses.LASIK (Laser in-situ Keratomileusis) can surgically correct your vision so that you see clearly without the use of corrective lenses.</p>
             <h2>Surgery procedures</h2>
             <p style={{fontSize:"20px",fontFamily:"serif"}}>LASIK eye surgery is an outpatient procedure that takes about 10 minutes per eye. You can elect to have both eyes corrected on the same day or each eye on separate days. Just prior to the procedure, you will be given medicine to help you relax and eye drops will be placed in your eyes to numb them.
                Once you are ready, We will begin the procedure, which involves cutting a thin flap in the cornea and folding it over. Then, the exposed part of the cornea is cleaned and prepared for the surgery. Next, a laser will be positioned over your eye, and the cornea will be reshaped. After your surgery, you will be given between 30 and 60 minutes to recover. We do ask that you bring a second driver with you as you will not be recovered enough to drive yourself home.</p>
             <h1>Corneal Transplant</h1>
             <h2>Surgery procedures</h2>
             <p style={{fontSize:"20px",fontFamily:"serif"}}>Corneal Transplant Surgery is a procedure typically done on an outpatient basis, lasting about 1-2 hours. Depending on your condition, your doctor may recommend a full or partial transplant of the cornea, which is the clear, dome-shaped surface at the front of your eye.

Before the procedure begins, you will receive medication to help you relax, and anesthetic drops will be applied to numb your eyes. Once you are prepared, we will carefully remove the damaged portion of your cornea and replace it with a healthy donor cornea. The new corneal tissue will be stitched into place with very fine sutures.

After the surgery, you'll spend about 30 to 60 minutes in recovery. Since your vision may be impaired initially, it's important to have someone drive you home. You'll be provided with eye drops and instructions to help with healing and prevent infection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Service
