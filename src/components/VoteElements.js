const VoteElements = polls && polls.map((poll) => 
  <div className='d-flex justify-content-center'>
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
  </div>
    );

    module.exports = VoteElements;