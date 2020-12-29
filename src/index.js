import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import {Counter} from './components/Counter'
// import {CurrentDateTime} from './components/CurrentDateTime' 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Counter count={0}/>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <CurrentDateTime />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
