import React from 'react'
import { useState,useEffect } from 'react'

const Signup = () => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formInfo = {
    username : "ajfksjf",
    password : "sifdhisjfs"
  }

  useEffect(() => {
    //event.preventDefault()
     fetch('http://localhost:1337/register' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //firstName,
        //lastName,
        //email,
        //password
        formInfo
      }),
     }) 
     .then(res => res.json())
     .then(firstName => setfirstName(firstName))
     .then(lastName => setlastName(lastName))
     .then(email => setEmail(email))
     .then(password => setPassword(password))

     //console.log(data)
  },[])

  return (
    <div class="container bg-light my-5 d-flex justify-content-center">
      <form class="p-3 w-50">
        <h1 className='d-flex justify-content-center'>Sign Up</h1>
        <div className="mb-3">
          <label for="firstName" class="form-label fw-bold">First name</label>
          <input
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="lastName" class="form-label fw-bold">Last name</label>
          <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text" id="lastName" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label for="email" class="form-label fw-bold">Email address</label>
          <input
            value={email} onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="password" class="form-label fw-bold">Password</label>
          <input
            value={password} onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
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