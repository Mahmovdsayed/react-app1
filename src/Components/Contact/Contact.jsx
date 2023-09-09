import React from 'react'

export default function Contact() {
  return <>
      
      <section className=' d-flex justify-content-center py-5 min-vh-100  '>
        <div className="container">
        <div className="contact">
            <h1 className='text-center fw-bold'>CONATCT SECTION</h1>
            <div className="line d-flex justify-content-center align-items-center my-3">
            <div className="lines bg-black me-3"></div>
            <span><i className="fa-solid fa-star"></i></span>
            <div className="lines bg-black ms-3"></div>
           </div>
           <form className=' '>
            <input className='my-5 form-control' placeholder='userName' type="text" />
            <input className='my-5  form-control' placeholder='userAge' type="number" />
            <input className='my-5 form-control' placeholder='userEmail' type="email" />
            <input className='my-5 form-control' placeholder='userPassword' type="password" />
            <button className='btn btn-success text-start'>Send Message</button>
           </form>
        </div>
        </div>
      </section>

    </>
  
}
