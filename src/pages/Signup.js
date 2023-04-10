import React, { useState } from 'react'

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLirstName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/auth/register' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
     }) 
     const data = await response.json()
     console.log(data)
     
  }
  return (
    <div class="container bg-light my-5 d-flex justify-content-center">
      <form class="p-3 w-50" onSubmit={handleSubmitChange}>
        <h1 className='d-flex justify-content-center'>Sign Up</h1>
        <div className="mb-3">
          <label for="firstName" class="form-label fw-bold">First name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label for="lastName" class="form-label fw-bold">Last name</label>
          <input type="text" id="lastName" className="form-control" placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="mb-3">
          <label for="email" class="form-label fw-bold">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label for="password" class="form-label fw-bold">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="d-flex justify-content-center forgot-password text-right">
          Already registered? <a href="/signin"> Sign in</a>
        </p>
      </form>
    </div>
    
  )
}

export default Signup