import React from 'react';
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

export default QuestionDetails;
