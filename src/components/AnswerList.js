import React from 'react';
import AnswerDetails from './AnswerDetails';

const AnswerList = (props) => {
  console.log(props);
  const answers = props.answers;
  return(
    <ul>
      {answers.map(answer => {
        return (
          <li key={answer.id}>
            <AnswerDetails
              id={answer.id}
              body={answer.body}
              author={answer.author}
              created_at={answer.created_at}
              onAnswerDeleteClick={props.onAnswerDeleteClick}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default AnswerList;