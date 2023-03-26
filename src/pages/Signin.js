import React from 'react'

const Signin = () => {
  return (
    <div class="container bg-light my-5 d-flex justify-content-center">
      <form class="p-3 w-50">
        <h1 className='d-flex justify-content-center'>Log In</h1>
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
          Not registered yet? <a href="/signup">Register</a>
        </p>
      </form>
    </div>
  )
}

export default Signin