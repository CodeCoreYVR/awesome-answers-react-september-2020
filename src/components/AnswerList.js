import React from 'react';
import AnswerDetails from './AnswerDetails';

const AnswerList = (props) => {
  const answers = props.answers;
  return(
    <ul>
      {answers.map(answer => {
        return (
          <li key={answer.id}>
            <AnswerDetails
              body={answer.body}
              author={answer.author}
              created_at={answer.created_at}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default AnswerList;