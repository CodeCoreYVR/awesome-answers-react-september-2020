import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';

const QuestionShowPage = () => { // react component
  // returns react elements
  // provide props to a element by adding props like you would html element's attributes
  return(
    <main>
      <QuestionDetails
        title='What is your favourite colour'
        body='red, green, blue, ect'
        author={ { full_name: 'Jon Snow' } }
        view_count={1234}
        created_at={new Date()}
        updated_at={new Date()}
      />
      <h2>Answers:</h2>
      {/* { AnswerDetails({body: 'blue', author: { full_name: 'bugs bunny'}, created_at: new Date()})} */}
      {/* Because AnswerDetails is just a function that returns a React Element you can render it out with the above syntax as well but this would be considered bad practice. */}
      <AnswerDetails
        body='blue'
        author={{ full_name: 'Stve Jobs'}}
        created_at={new Date()}
      />
    </main>
  )
}

export default QuestionShowPage;