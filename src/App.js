import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create_poll from './pages/Create_poll';
import Voting_page from './pages/Voting_page';
import Help from './pages/Help';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
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
