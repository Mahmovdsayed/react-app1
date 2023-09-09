import React from 'react'
import '../More/more.css'
export default function MoreInfo() {
  return (
    <>
      <section className=' p-4 style-bg'>
        
            <div className="row text-center p-4 text-white g-4 d-flex  justify-content-between align-items-center ">
                <div className="col-md-4  my-5">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <span>Clark, MO 65243</span>
                </div>
                <div className="col-md-4  my-5">
                <h3>AROUND THE WEB</h3>
                   
                    <div className="icons d-flex   justify-content-center align-items-center">
                    <span className='me-2 ms-2'><i className='fa-brands fa-facebook icon'></i></span>
                    <span className='me-2 ms-2'><i className='fa-brands fa-twitter  icon'></i></span>
                    <span className='me-2 ms-2'><i className='fa-brands fa-linkedin-in icon'></i></span>
                    <span className='me-2 ms-2'><i className='fa-solid fa-globe  icon'></i></span>
                    </div>

                </div>
                <div className="col-md-4  my-5">
                <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
      </section>
    </>
  )
}
