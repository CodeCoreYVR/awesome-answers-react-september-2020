import React from 'react';

const AnswerDetails = (props) => {
  const body = props.body;
  const author = props.author;
  const created_at = props.created_at;
  return(
    <div
      style={{
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        paddingLeft: '5px'
      }}
    >
      <p>{body}</p>
      <p>By { author ? author.full_name : null }</p>
      <p>
        <strong>Created at:</strong> {created_at.toLocaleString()}
      </p>
      <button onClick={() => props.onAnswerDeleteClick(props.id)}>
        Delete
      </button>
    </div>
  )
}

export default AnswerDetails;