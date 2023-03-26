import React from 'react'

const Signup = () => {
  return (
    <div class="container bg-light my-5 d-flex justify-content-center">
      <form class="p-3 w-50">
        <h1 className='d-flex justify-content-center'>Sign Up</h1>
        <div className="mb-3">
          <label for="firstName" class="form-label fw-bold">First name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="lastName" class="form-label fw-bold">Last name</label>
          <input type="text" id="lastName" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label for="email" class="form-label fw-bold">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="password" class="form-label fw-bold">Password</label>
          <input
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