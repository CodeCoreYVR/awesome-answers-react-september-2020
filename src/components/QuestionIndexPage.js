import React, { Component } from 'react';

import questionsData from '../questionData';
class QuestionIndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: questionsData
    }
  }

  deleteQuestion(id) {
    // to change you can only call this.setState

    // .setState accepts a callback, with (state, props) as the arguments. State in the arguments is the current state of the component
    
    this.setState((state) => {
      // setState must always return an object.
      // this object gets combined with the current state.
      return {
        questions: state.questions.filter(q => q.id !== id)
      }
    })
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
                  <button onClick={
                    () => this.deleteQuestion(question.id)
                  }>
                    Delete
                  </button>
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