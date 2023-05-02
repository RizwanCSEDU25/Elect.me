import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Voting_page = () => {
  let option;
  const {electId, voterId} = useParams();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://localhost:3001/api/vote/poll/'+electId,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+token,
    },
  },
    ).then((res) => {
      //return res.json();
      if(!res.ok){
        console.log(res)
        throw Error("fetching is not successful");
      }
      else{
        return res.json();
      }
    }).then((data) => {
      setQuestion(data.question);
      setOptions(data.options);
      setIsLoading(false);
      setError(null);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (e, chosen) => { 
    option = chosen;
    e.preventDefault();
  }

  const handleSubmit = async() => {
    try {
      const response = await fetch('http://localhost:3001/api/poll/addVote/'+electId+'/'+voterId+'/'+ option, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
     })

     const data = await response.json();
     if(data.status === "finished"){
      alert('Election already finished')
     }
     if(data.status === "voted"){
      alert('You have already voted once')
     }
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  }

  const voteElements = options && options.map((index) =>
  <div className='d-flex justify-content-center'>
    <a href="#" onClick={(e) => handleClick(e, index.option)}>
      <article className="poll m-4 d-flex justify-content-center">
        <p className="poll__name text-center fs-4 fw-bold">{index.option}</p>
      </article>
    </a>
    
  </div>
    );

  return (
       <div>
        {error && <p>{error}</p>}
      {isLoading && <p>loading</p>}
        <h1 className='text-center'>{question}</h1>
        {voteElements}
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
       </div>
  )
}

export default Voting_page