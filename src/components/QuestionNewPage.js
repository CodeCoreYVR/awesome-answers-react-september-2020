import React from 'react';
import NewQuestionForm from './NewQuestionForm1';
import { Question } from '../requests';

const QuestionNewPage = (props) => {
  // Because QuestionNewPage is being renderd by a Route component provided by React-Router-Dom
  // It will recieve the history, locatin, and match properties
  function createQuestion(params) {
    Question.create(params)
      .then((question) => {
        const id = question.id;
        // the history prop contains methods used to navigate
        props.history.push(`/questions/${id}`);
      })
  }

  return(
    <div>
      <NewQuestionForm onSubmit={createQuestion} />
    </div>
  )
}

export default QuestionNewPage;