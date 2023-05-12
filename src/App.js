import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import CreatePoll from './pages/Create_poll';
import Help from './pages/Help';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard'
import PrivateOutlet from './components/PrivateOutlet';
import PreventLoginPage from './components/Prevent';
import VoterLogin from './pages/Voter_login';
import VotingPage from './pages/Voting_page';
import Result from './pages/Result';
import { createContext } from 'react';
import { useReducer } from 'react';
import { initialState,reducer } from './reducer/UseReducer';
import VoterList from './pages/VoterList';

export const userContext = createContext();
function App () {
 //const userContext = createContext();
//  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <BrowserRouter> 
        
        {/* <userContext.Provider value={{state,dispatch}}> */}
        {window.location.pathname.slice(0,5) !== '/cast' && <Navbar />}
        
        <div className='mydiv'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PreventLoginPage />}>
              <Route path="signup" element={<Signup/>} />
              <Route path="signin" element={<Signin/>} />
            </Route>
            
            <Route path="/vote" element={<VoterLogin/>} />
            <Route path="/cast/:electId/:voterId" element={<VotingPage/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="dashboard" element={<Dashboard/>} />
              <Route path="result" element={<Result/>} />
              <Route path="voterlist" element={<VoterList/>} />
              <Route path="create" element={<CreatePoll/>} />
              
            </Route>
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>
        {/* </userContext.Provider> */}
            
      </BrowserRouter>
  );
}

export default App;
