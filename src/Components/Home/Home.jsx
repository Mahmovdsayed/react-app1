import React from "react";
import '../Home/home.css'
import logo from '../assets/avataaars.svg'
function Home() {
  
    
return <>
   
   
   <section className='d-flex justify-content-center align-items-center py-5 min-vh-100 text-center style-back'>
    <div class="container">
    <div className="hero">
        <img src={logo}  width={250}  alt={"user"} />
        <h1 className='fw-bold mt-4'>START FRAMEWORK</h1>
        <div className="line d-flex justify-content-center align-items-center my-3">
            <div className="lines me-3"></div>
            <span><i className="fa-solid fa-star"></i></span>
            <div className="lines ms-3"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
   </section>
  
    </>;
}

export default Home;