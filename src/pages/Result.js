import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from './skeleton';
// let id;
const Result = () => {
    
    const location = useLocation();
    console.log(location.state.id)
    const id = location.state.id;

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isResultLoaded, setIsResultLoaded] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    // if(location.state !== null){
    //   id = location.state.id;
    // }
    fetch('http://localhost:3001/api/poll/result/'+id,{headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
    },}).then((res) => {
      //return res.json();
      if(!res.ok){
        console.log(res)
        throw Error("fetching is not successful");
      }
      else {
        return res.json();
      }
    }).then((data) => {
      if(data.status==="ok"){
        setResult(data.options);
        setIsLoading(false);
        setIsResultLoaded(true);
        setError(null);
      }else if(data.status === "notok"){
        setError("Election has not finished yet");
        setResult(null);
        setIsLoading(false);
      }
      
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);
  console.log(result)

  const resultElements = result && result.map((index) =>
  <div className='d-flex justify-content-center'>
      <article className="poll m-4 d-flex justify-content-center">
        <p className="poll__name text-center fs-4 fw-bold">Option: {index.option}</p>
        <p className="poll__name text-center fs-4 fw-bold">Votes: {index.votes}</p>
      </article>
    
  </div>
    );

  return (
    <div>
      
        {error && <p>{error}</p>}
      {isLoading && [1,2,3,4,5,6,7].map((n) => <Skeleton    key={n}/>)}
      {isResultLoaded && <h1 className="text-center">Result</h1>}
        {resultElements}
       </div>
  )
}

export default Result