import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [polls, setPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://localhost:3001/api/auth/polls',{headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
    },}).then((res) => {
      //return res.json();
      if(!res.ok){
        console.log(res)
        throw Error("fetching is not successful");
      }
      else{
        return res.json();
      }
    }).then((data) => {
      setPolls(data.polls);
      setIsLoading(false);
      setError(null);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (id) => {
    navigate('/result',{state: {id: id}});
  }
  // console.log(new Date.toLocaleString())
  const pollElements = polls && polls.map((poll) => 
  <div className='d-flex justify-content-center'>
    <a href="#" onClick={() => handleClick(poll._id)}>
        <article className="poll m-4 d-flex justify-content-center">
          <h3 className="poll__name ">{poll.title}</h3>
          <p className="poll__time">Starting Time: {new Date(poll.startTime).toLocaleTimeString(
              'en-us',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }
            )}</p>
          <p className="poll__time">Ending Time: {new Date(poll.endTime).toLocaleTimeString(
              'en-us',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }
            )}</p>
        </article>
    </a>
  </div>
    );
  // console.log(poll)
  return (
    <div>
      <h1 className='text-center'>Your Polls</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>loading</p>}
      {pollElements}
    </div>
  )
}

export default Dashboard