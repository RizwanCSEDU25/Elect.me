import React, { useState } from 'react'

const Create_poll = () => {
  const [title, setTitle] = useState("");
  const [starttime, startTime] = useState("");
  const [endtime, endTime] = useState("");
  const [votermail, setVoterMail] = useState("");
  const [voterid, setVoterID] = useState("");
  const [questions, setQuestions] = useState("");
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    for (let i = 0; i < 1; i++) {
      setCounter(counter + 1);
    }
    //console.log(counter);
  };


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleStartTimeChange = (e) => {
    startTime(e.target.value);
  }

  const handleEndTimeChange = (e) => {
    endTime(e.target.value);
  }

  const handleVotermailChange = (e) => {
    setVoterMail(e.target.value);
  }

  const handleVoteridChange = (e) => {
    setVoterID(e.target.value);
  }

  const handleQuestionChange = (e) => {
    setQuestions(e.target.value);
  }

  const handleSubmitChange = (e) => {
    let userInfo = {
      title: title,
      startTime: starttime,
      endTime: endtime,
      voterMail: votermail,
      Questions: questions
    }
    console.log(userInfo)
    e.preventDefault();
  }

  return (
      <div class="container bg-light my-5">
          <div class="title text-center mb-3 pt-3">
              <h1>Create a Poll</h1>
          </div>
          
          <div className='d-flex justify-content-center'>
          <form class="p-3 w-50" onSubmit={handleSubmitChange}>
            <div class="mb-3">
              <label for="title" class="form-label fw-bold">Title </label>
              <input type="text" id="title" class="form-control" placeholder='e.g. CSEDU Students Club' value={title} onChange={handleTitleChange} required/>
            </div>

            <div class="row mb-3">
              <div class="col">
              <label for="start" class="form-label fw-bold">Starting Time </label>
              <input type="datetime-local" id="start" class="form-control" value={starttime} onChange={handleStartTimeChange} required/>
              </div>
              
              <div class="col">
              <label for="end" class="form-label fw-bold">Ending Time </label>
              <input type="datetime-local" id="end" class="form-control" value={endtime} onChange={handleEndTimeChange} required/>
              </div>
            </div>

            <div class = "row mb-3">
            
            <div class = "col">
              <button style={{ width: "150px", height: "50px",}} class="btn btn-lg btn-dark" onClick={handleClick}>Add Voter</button>

              {Array.from(Array(counter)).map((c, index) => {
                return <div>
                  <label for="votermail" class="form-label fw-bold">Email </label>
                  <input type="text" id="votermail" class="form-control" placeholder='Email' value={votermail} onChange={handleVotermailChange} required/>
                  <div class="col">
                    <label for="voterid" class="form-label fw-bold">Voter ID </label>
                    <input type="text" id="voterid" class="form-control" placeholder='ID' value={voterid} onChange={handleVoteridChange} required/>
                  </div>

                  
                   </div>;
              })}
            </div>
            </div>
            
            <div class="mb-3">
              <label for="questions" class="form-label fw-bold">Questions </label>
              <input type="text" id="questions" class="form-control" placeholder='Questions' value={title} onChange={handleQuestionChange} required/>
            </div>



            <div class="mb-3 pt-2">
              <button class="btn btn-lg btn-dark">Continue</button>
            </div>
          </form>
          </div>
          
      </div>
  )
}

export default Create_poll