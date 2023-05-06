import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'bootstrap';
//import { useContext } from 'react';
//import { userContext } from '../App';
//import { useState } from 'react';
//import { useEffect } from 'react';

const Navbar = () => {
  //const [user, setUser] = useState({});
  //const {state,dispatch} = useContext(userContext);
  function useAuth() {

    const token = localStorage.getItem('token');

    if(token===null) return false;
    return true;
 }

 const user = useAuth();
 console.log(user);

  
  const handleLogout = () => {
    //const {state,dispatch} = useContext(userContext);
    //dispatch({type:"USER", payload:false})
    localStorage.removeItem('token');
    user = false;

    console.log(localStorage) // Remove the JWT from local storage
    // Perform any other log out actions, such as redirecting to a log in page
  };

  if(!user){
    return (
      <div class="container-fluid bg-dark">
              <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-white fixed-top" style={{paddingLeft: "5rem", paddingRight: "5rem"}}>
                  <a href="#" class="navbar-brand">
                      <img class="logo" src="vote-icon-22.jpg" />
                  </a> 
                  <h1 class="fw-bold" style={{paddingLeft: "0.25rem"}}>Elect.me</h1> 
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                      <ul class="navbar-nav ms-auto" textAlign= 'center' >
                      <div class="collapse navbar-collapse" id="navbarSupportedContent" style= {{textAlign:'center'}}>
                      <li class="nav-item"><Link class="nav-link active" to="/"> <a>Home</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/vote"><a>Vote</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/help">Help</Link></li>
                      </div>
                      </ul>
                      <ul class="navbar-nav ms-auto">
                      <div class="collapse navbar-collapse" id="navbarSupportedContent" style= {{paddingRight: "0.25rem"}}>
                      <li class="nav-item"><a href='/signup'><button type="button" class="btn btn-outline-light me-1">Sign up</button></a></li>
                      <li class="nav-item"><a href='/signin'><button type="button" class="btn btn-outline-light me-1">Sign in</button></a></li>
                      </div>
                      {/* <li class="nav-item"><button class="button" onClick={handleLogout}>Log out</button></li> */}
                      </ul>
                  </div>
              </nav>
      </div>
    )

  }else{
    return (
      <div class="container-fluid bg-dark">
              <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-white fixed-top" style={{paddingLeft: "5rem", paddingRight: "5rem"}}>
                  <a href="#" class="navbar-brand">
                      <img class="logo" src="vote-icon-22.jpg" />
                  </a> 
                  <h1 class="fw-bold" style={{paddingLeft: "0.25rem"}}>Elect.me</h1> 
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                      <ul class="navbar-nav ms-auto" textAlign= 'center' >
                      <div class="collapse navbar-collapse" id="navbarSupportedContent" style= {{textAlign:'center'}}>
                      <li class="nav-item"><Link class="nav-link active" to="/"> <a>Home</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/dashboard"> <a>Dashboard</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/create"><a>Create Poll</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/vote"><a>Vote</a></Link></li>
                      <li class="nav-item"><Link class="nav-link" to="/help">Help</Link></li>
                      </div>
                      </ul>
                      <ul class="navbar-nav ms-auto">
                      <div class="collapse navbar-collapse" id="navbarSupportedContent" style= {{paddingRight: "0.25rem"}}>
                      <li class="nav-item"><a href='/signin'><button type="button" class="btn btn-outline-light" onClick={handleLogout}>Logout</button></a></li>
                      </div>
                      {/* <li class="nav-item"><button class="button" onClick={handleLogout}>Log out</button></li> */}
                      </ul>
                  </div>
              </nav>
      </div>
    )
  }
    
}

export default Navbar