import React from 'react';

const AnswerDetails = (props) => {
  const body = props.body;
  const author = props.author;
  const created_at = props.created_at;
  return(
    <div>
      <p>{body}</p>
      <p>By { author.full_name }</p>
      <p>
        <strong>Created at:</strong> {created_at.toLocaleString()}
      </p>
    </div>
  )
}

export default AnswerDetails;