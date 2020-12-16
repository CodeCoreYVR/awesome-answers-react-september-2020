import React, { Component } from 'react';

class QuestionIndexPage extends Component {
  render() {
    return (
      <main>
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: 'none'}}>
          {
            this.props.questions.map(question => {
              return(
                <li key={question.id}>
                  <a href='#'>{question.title}</a>
                </li>
              )
            })
          }
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;