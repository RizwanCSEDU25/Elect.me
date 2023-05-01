import React,{useState} from 'react'

const Voter_login = () => {
    const [error, setError] = useState(null);
    const [electId, setElectId] = useState("");
    const [voterId, setVoterId] = useState("");
  
    const handleElectIdChange = (e) => {
        setElectId(e.target.value);
    }
  
    const handleVoterIdChange = (e) => {
        setVoterId(e.target.value);
    }
  
    const handleSubmitChange = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/vote/login' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            electId,
            voterId
        }),
       })

       const voterStatus = await response.json();

       if(voterStatus.status==="ok"){
        window.location.href = '/cast/'+electId+'/'+voterId
       }
       else if(voterStatus.status==="notok"){
            alert('You may have already voted once')
        }
        else if(voterStatus.status==="wronginfo"){
          alert('Please check your election ID / Voter ID')
      }
        else if(voterStatus.status==="notstarted"){
          alert('Election has not started yet')
      }
      else if(voterStatus.status==="finished"){
        alert('Election already finished')
    }
      } catch (error) {
        setError(error.message);
      }
      
       
    }
  
    return (
      <div class="container bg-light my-5 d-flex justify-content-center">
        <form class="p-3 w-50" onSubmit={handleSubmitChange}>
        <div class="title text-center mb-3 pt-3">
              <h1>Log in with Voter ID</h1>
          </div>
          <div className="mb-3">
            <label for="electId" class="form-label fw-bold">Election ID</label>
            <input
              type="text"
              id="electId"
              className="form-control"
              placeholder="Enter Election ID"
              value={electId}
              onChange={handleElectIdChange}
            />
          </div>
          <div className="mb-3">
            <label for="voterId" class="form-label fw-bold">Voter ID</label>
            <input
              type="text"
              id="voterId"
              className="form-control"
              placeholder="Enter Voter ID"
              value={voterId}
              onChange={handleVoterIdChange}
            />
          </div>
          <div className="d-grid mb-3 pt-2">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    )
}

export default Voter_login