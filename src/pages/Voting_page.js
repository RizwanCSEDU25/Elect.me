import React, {useState} from 'react'

const Voting_page = () => {
  const [electionID, setElectionID] = useState("");
  const [voterID, setVoterID] = useState("");

  const handleElectionIDChange = (e) => {
    setElectionID(e.target.value);
  }

  const handleVoterIDChange = (e) => {
    setVoterID(e.target.value);
  }

  const handleSubmitChange = (e) => {
    let voterInfo = {
      electionID,
      voterID
    }
    console.log(voterInfo)
    e.preventDefault();
  }  
  return (
        <div class="container bg-light my-5">
          <div class="title text-center mb-3 pt-3">
              <h1>Log in with Voter ID</h1>
          </div>
          
          <div className='d-flex justify-content-center'>
          <form class="p-3 w-50" onSubmit={handleSubmitChange}>
            <div class="mb-3">
              <label for="electionID" class="form-label fw-bold">Election ID </label>
              <input type="text" id="electionID" class="form-control" placeholder='e.g. ghhZfgh' value={electionID} onChange={handleElectionIDChange} required/>
            </div>

            <div class="mb-3">
              <label for="voterID" class="form-label fw-bold"> Voter ID </label>
              <input type="text" id="voterID" class="form-control" placeholder='e.g. fheCbv' value={voterID} onChange={handleVoterIDChange} required/>
            </div>

            <div class="mb-3 pt-2">
              <button class="btn btn-lg btn-dark">Continue</button>
            </div>
          </form>
          </div>
          
      </div>
  )
}

export default Voting_page