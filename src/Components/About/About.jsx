import React from 'react'


export default function About() {
  return <>

      <section className=' d-flex justify-content-center align-items-center py-5 min-vh-100 text-center style-back'>
      <div className="container">
        <div className="main">
          <h1 className='fw-bold'>ABOUT COMPONENT</h1>
          <div className="line d-flex justify-content-center align-items-center my-3">
            <div className="lines me-3"></div>
            <span><i className="fa-solid fa-star"></i></span>
            <div className="lines ms-3"></div>
        </div>
        <div className="row g-2 text-start">
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
        </div>
      </div>
      
      </section>

    </>
  
}
