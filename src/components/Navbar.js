import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem('jwt'); // Remove the JWT from local storage
  //   // Perform any other log out actions, such as redirecting to a log in page
  // };
  return (
    <div class="container-fluid bg-dark">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-white fixed-top" style={{paddingLeft: "5rem", paddingRight: "5rem"}}>
                <a href="#" class="navbar-brand">
                    <img class="logo" src="vote-icon-22.jpg" />
                </a> 
                <h1 class="fw-bold" style={{paddingLeft: "0.25rem"}}>Elect.me</h1> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link class="nav-link active" to="/"> <a>Home</a></Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/signup"><a>Log in/Sign up</a></Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/create"><a>Create Poll</a></Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/vote"><a>Vote</a></Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/help">Help</Link></li>
                        {/* <li class="nav-item"><button class="button" onClick={handleLogout}>Log out</button></li> */}
                    </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navbar