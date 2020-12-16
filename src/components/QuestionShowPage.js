import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';

const QuestionShowPage = ({ question }) => { // react component
  // returns react elements
  // provide props to a element by adding props like you would html element's attributes
  return(
    <main>
      <QuestionDetails
        title={ question.title }
        body={ question.body }
        author={ question.author }
        view_count={ question.view_count }
        created_at={new Date(question.created_at)}
        updated_at={new Date(question.updated_at)}
      />
      <h2>Answers:</h2>
      {/* { AnswerDetails({body: 'blue', author: { full_name: 'bugs bunny'}, created_at: new Date()})} */}
      {/* Because AnswerDetails is just a function that returns a React Element you can render it out with the above syntax as well but this would be considered bad practice. */}
      <AnswerList answers={question.answers} />
    </main>
  )
}

export default QuestionShowPage;