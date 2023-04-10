import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home';
import Create_poll from './pages/Create_poll';
import Voting_page from './pages/Voting_page';
import Help from './pages/Help';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useState } from 'react';

function App() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
     fetch('http://localhost:1337/register' , {
      method: 'Post',
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

     const data = await Response.JSON()
     console.log(data)
  }

  return (
      <BrowserRouter> 
        
        <Navbar />
        
        <div className='mydiv'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/create" element={<Create_poll/>} />
            <Route path="/vote" element={<Voting_page/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>
            
      </BrowserRouter>
  );
}

export default App;
