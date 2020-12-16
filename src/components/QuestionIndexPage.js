import React, { Component } from 'react';
import NewQuestionForm from './NewQuestionForm';

import questionsData from '../questionData';
class QuestionIndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: questionsData
    }

    this.createQuestion = this.createQuestion.bind(this)
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

  createQuestion(params) {
    this.setState((state) => {
      return {
        questions: [
          {
            id: (Math.max(...state.questions.map(q => q.id)) + 1), // get the largest id out of all the question ids then added 1 to it
            ...params
          },
          ...state.questions
        ]
      }
    })
  }

  render() {
    return (
      <main>
        <h1>Questions</h1>
        <NewQuestionForm onSubmit={this.createQuestion}/>
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