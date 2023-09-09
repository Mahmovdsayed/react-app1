import React from 'react'
import first from '../assets/poert1.png'
import second from '../assets/port2.png'
import third from '../assets/port3.png'
import '../Portfolio/Portfolio.css'
export default function Portfolio() {
  return <>
      
      <section className='min-vh-100 text-center py-3'>
        <div className="container">
          <div className="portfolio">
          <h1 className='fw-bold'>PORTFOLIO COMPONENT</h1>
          <div className="line d-flex justify-content-center align-items-center my-3">
            <div className="lines bg-black me-3"></div>
            <span><i className="fa-solid fa-star"></i></span>
            <div className="lines bg-black ms-3"></div>
           </div>
           <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={first} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={second} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={third} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={first} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={second} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="image">
              <img className=' rounded w-100' src={third} alt={"first"} />
              <div className="layer rounded">
                <span className='plus'><i className="fa fa-plus"></i></span>
              </div>
              </div> 
            </div>
           </div>
          </div>
        </div>
      </section>
      

    </>
  
}
