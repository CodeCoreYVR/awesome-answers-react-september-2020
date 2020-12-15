import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React Component is a Function or a Class that returns a React Element.
// React Components must use PascalCase
const QuestionDetails = () => {
  return (
    <div>
      <h2>What is your favourite colour?</h2>
      <p>Red, green, blue, magenta, ect.</p>
      <p>By Jon Snow</p>
      <p>
        <small>Seen 10 time(s)</small>*<small>Created 10 days ago</small>*
        <small>Last edited 2 hours ago</small>
      </p>
    </div>
  );
};

const AnswerDetails = () => {
  return(
    <div>
      <p>This is my answer's text.</p>
      <p>By Steve Jobs</p>
      <p>
        <strong>Created at:</strong> 1 day ago
      </p>
    </div>
  )
}

ReactDOM.render(
  <AnswerDetails />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
