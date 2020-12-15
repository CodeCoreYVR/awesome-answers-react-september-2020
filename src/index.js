import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React Component is a Function or a Class that returns a React Element.
// React Components must use PascalCase
const QuestionDetails = ({ title, body, author, view_count, created_at, updated_at }) => {
  // props is the only argument to React Components
  // it is a javascript object

  // console.log(props);
  // const title = props.title;
  // const body = props.body;
  // const author = props.author;
  // const view_count = props.view_count;
  // const created_at = props.created_at;
  // const updated_at = props.updated_at;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By {author.full_name}</p>
      <p>
        <small>Seen {view_count} time(s)</small>*<small>Created {created_at.toLocaleString()}</small>*
        <small>Last edited {updated_at.toLocaleString()}</small>
      </p>
    </div>
  );
};

const AnswerDetails = (props) => {
  const body = props.body;
  const author = props.author;
  const created_at = props.created_at;
  return(
    <div>
      <p>{body}</p>
      <p>By { author.full_name }</p>
      <p>
        <strong>Created at:</strong> {created_at.toLocaleString()}
      </p>
    </div>
  )
}

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

ReactDOM.render(
  <QuestionShowPage />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
