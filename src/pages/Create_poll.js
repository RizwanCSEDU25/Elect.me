import React, { useState } from 'react'

const Create_poll = () => {
  const [title, setTitle] = useState("");
  const [starttime, startTime] = useState("");
  const [endtime, endTime] = useState("");
  // const [votermail, setVoterMail] = useState("");
  // const [voterid, setVoterID] = useState("");
  const [voters, setVoters] = useState([{votermail: "", voterid: ""}]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{option: "", votes: 0}]);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleStartTimeChange = (e) => {
    startTime(e.target.value);
  }

  const handleEndTimeChange = (e) => {
    endTime(e.target.value);
  }

  // const handleVotermailChange = (e) => {
  //   setVoterMail(e.target.value);
  // }

  // const handleVoteridChange = (e) => {
  //   setVoterID(e.target.value);
  // }

  const handleAddingVoters = (e, i) => {
    const votermail = e.target.value
    const onchangeVal = [...voters]
    onchangeVal[i]={votermail: votermail}
    setVoters(onchangeVal);
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleAddingOption = (e, i) => {
    const option = e.target.value
    const votes = 0;
    const onchangeVal = [...options]
    onchangeVal[i]={option: option, votes: votes}
    setOptions(onchangeVal);
  }

  const handleAddingOptionField = () => {
    setOptions([...options, {option: "", votes: 0}])
  }

  const handleAddingVoterField = () => {
    setVoters([...voters, {votermail:""}])
  }

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    console.log("first")
    const response = await fetch('http://localhost:3001/api/poll/add_poll' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        startTime: starttime,
        endTime: endtime,
        voter: voters,
        question: question,
        options: options,
      }),
    }) 
    console.log(response)
    const data = await response.json()
    console.log(data['voter'][0]._id)
    const eid = data['id']

    data['voter'].map(async index => await fetch('http://localhost:3001/api/mail/?eid='+eid+'&vid='+index._id+'&vmail='+index.votermail))

    //await fetch('http://localhost:3001/api/mail/?id='+data['id'])
    // if(data.token) {
    //   localStorage.setItem('token', data.user)
    //   window.location.href = '/'
    // }
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

            <div class="col mb-3">
              <label for="voter" class="form-label fw-bold">Add Voter </label>
              <button type="button" class="btn btn-sm btn-outline-dark m-3" onClick={handleAddingVoterField}> + </button>
              {
                  voters.map((val,i)=>
                    <div>
                        <input type="email" id="voter" class="form-control" placeholder='Enter Voter E-mail' value={val.votermail} onChange={(e) => handleAddingVoters(e, i)}/>
                    </div>
                  )
              }
              
            </div>
            
            <div class="mb-3">
              <label for="questions" class="form-label fw-bold">Question </label>
              <input type="text" id="questions" class="form-control" placeholder='Questions' value={question} onChange={handleQuestionChange} required/>
            </div>

            <div class="col mb-3">
              <label for="option" class="form-label fw-bold">Add Options </label>
              <button type="button" class="btn btn-sm btn-outline-dark m-3" onClick={handleAddingOptionField}> + </button>
              {
                  options.map((val,i)=>
                    <div>
                        <input type="text" id="option" class="form-control" placeholder='Add Option' value={val.option} onChange={(e) => handleAddingOption(e, i)}/>
                    </div>
                  )
              }
              
            </div>



            <div class="mb-3 pt-2">
              <button type="submit" class="btn btn-lg btn-dark">Continue</button>
            </div>
          </form>
          </div>
          
      </div>
  )
}

export default Create_poll