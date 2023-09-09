import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function NavBar() {
  return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark text-white p-4">
              <div className="container">
                <Link className="navbar-brand"to={""}>START FRAMEWORK</Link>
                <button className="navbar-toggler border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav  ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link style" to={"about"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link style" to={"portfolio"}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link style" to={"contact"}>contact</Link>
                        </li>
                     
                    </ul>
                   
                </div>
          </div>
        </nav>
        
        </>
  )
}
