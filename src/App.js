import React from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';

import questionsData from './questionData';
import qData from './qData';

import './styles/App.css';

const App = () => {
  return(
    <div>
      <QuestionIndexPage questions={questionsData}/>
      <QuestionShowPage question={qData}/>
    </div>
  );
}

export const B = () => {
  return(
    <div>B</div>
  )
}

export default App;