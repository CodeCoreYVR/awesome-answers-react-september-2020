import React from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';

import './styles/App.css';

const App = () => {
  return(
    <div>
      <QuestionIndexPage/>
      <QuestionShowPage/>
    </div>
  );
}

export const B = () => {
  return(
    <div>B</div>
  )
}

export default App;