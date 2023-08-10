import React  from 'react'
 import {Link } from 'react-router-dom'


const Navbar = () => {
    // const [text,setText]= useState("LogIn")
    // const changeText=()=>{


    //     if(text==="LogIn")
    //     setText("LogOut")
        
    //     else setText("LogIn")
    // }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Atlan</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
    </div>
    <Link type="button" className="btn btn-secondary mx-2" to='/login' >LogIN</Link>
    
  </div>
</nav>
  )
}

export default Navbar
