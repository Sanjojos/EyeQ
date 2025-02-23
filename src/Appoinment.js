import React, { useState } from 'react'
import './Appoinment.css'
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
const Appoinment = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    fname: '',
    Symptoms: '',
    address: '',
    emails:'',
    mobile:'',
    addinfo:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.fname ||  !details.Symptoms || !details.address || !details.emails || !details.mobile || !details.addinfo) {
      toast.warn("Please fill in all the fields");
      return;
    }

    axios.post("http://127.0.0.1:8000/book/", details)
      .then((response) => {
        console.log(response.data);
       
        toast.success("Booking successful");
        
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
    };
  return (
    <div >
       <section className='appoint'>
        <div className='container'>
          <div className='row'>
            <h1 style={{textAlign:"left",margin:"0",padding:"0",fontSize:"100px"}}></h1>
          </div>
        </div>
      </section><br/><br/>
      
       <section className="appoinment" >
        <div className="container">
          <div className="row">
          <h2 style={{ textAlign: 'center', marginBottom: '30px',fontFamily:"serif" }}>Book Appoinment</h2>
          <form action='' method='POST' onSubmit={handleSubmit}>
 
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" class="form-control"  id='fname'  onChange={handleInputChange} value={details.fname} />
        <label class="form-label" for="form6Example1"style={{fontFamily:"serif"}}>Full name</label>
      </div>
    </div>
  
  </div>

 
  <div data-mdb-input-init class="form-outline">
    <input type="text" class="form-control" id='Symptoms'  onChange={handleInputChange} value={details.Symptoms} />
    <label class="form-label" for="form6Example3" style={{fontFamily:"serif"}}>Symptoms</label>
  </div>

  
  <div data-mdb-input-init class="form-outline ">
    <input type="text" class="form-control" id='address'  onChange={handleInputChange} value={details.address} />
    <label class="form-label" for="form6Example4" style={{fontFamily:"serif"}}>Address</label>
  </div>

 
  <div data-mdb-input-init class="form-outline ">
    <input type="email"  class="form-control" id='emails'  onChange={handleInputChange} value={details.emails} />
    <label class="form-label" for="form6Example5" style={{fontFamily:"serif"}}>Email</label>
  </div>

  
  <div data-mdb-input-init class="form-outline">
    <input type="number"  class="form-control" id='mobile'  onChange={handleInputChange} value={details.mobile} />
    <label class="form-label" for="form6Example6"style={{fontFamily:"serif"}}>Phone</label>
  </div>


  <div data-mdb-input-init class="form-outline">
    <textarea class="form-control" id='addinfo'  onChange={handleInputChange} value={details.addinfo} rows="4"></textarea>
    <label class="form-label" for="form6Example7"style={{fontFamily:"serif"}}>Additional information</label>
  </div>

  <button data-mdb-ripple-init type="submit" value="submit" class="btn btn-primary btn-block mb-4" style={{fontFamily:"serif"}}>Book</button>
</form>
            
          </div>
        </div>
      </section><br/>
    </div>
  )
}

export default Appoinment
