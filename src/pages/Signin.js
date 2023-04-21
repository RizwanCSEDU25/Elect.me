import React,{useState} from 'react'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmitChange = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/auth/login' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
     })

     const data = await response.json()

     console.log(data)

     if(data.token) {
      localStorage.setItem('token', data.token)
      console.log(data.token)
      window.location.href = '/dashboard'
     }
     else{
      alert('Please check your username/password')
     }
     
  }

  return (
    <div class="container bg-light my-5 d-flex justify-content-center">
      <form class="p-3 w-50" onSubmit={handleSubmitChange}>
        <h1 className='d-flex justify-content-center'>Log In</h1>
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
            Log in
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