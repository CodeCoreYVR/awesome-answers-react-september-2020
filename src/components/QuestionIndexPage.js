import React, { Component } from 'react';

import questionsData from '../questionData';
class QuestionIndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: questionsData
    }
  }

  render() {
    return (
      <main>
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: 'none'}}>
          {
            this.state.questions.map(question => {
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