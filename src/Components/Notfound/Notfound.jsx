import React from 'react'
import '../Notfound/notfound.css'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return <>
  <section className='error'>
      <div className="container">
        <div className="notfound min-vh-100 d-flex text-start  align-items-center">
            <div className="hero">
            <h2>Page Not Found</h2>
        <h4>We couldn't find what you were looking for.</h4>
        <p>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
        <Link className='btn btn-dark' to={"/"}>Back Home</Link>     
         </div>
        </div>
      </div>
      </section>
    </>
  
}
