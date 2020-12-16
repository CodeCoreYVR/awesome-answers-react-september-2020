import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import questionData from '../qData';
class QuestionShowPage extends Component {
  // `this` refers to an instance of QuestionShowPage
  // to access props given to QuestionShowPage we use `this.props`
  constructor(props) {
    // constructor recieves the props object
    // if we want to use `this` within the constructor we must super(props).
    // basically you super(props) in every class component
    super(props);

    this.state = {
      question: questionData
    }
  }

  render() {
    return (
      <main>
        <QuestionDetails
          title={ this.state.question.title }
          body={ this.state.question.body }
          author={ this.state.question.author }
          view_count={ this.state.question.view_count }
          created_at={new Date(this.state.question.created_at)}
          updated_at={new Date(this.state.question.updated_at)}
        />
        <h2>Answers:</h2>
        {/* { AnswerDetails({body: 'blue', author: { full_name: 'bugs bunny'}, created_at: new Date()})} */}
        {/* Because AnswerDetails is just a function that returns a React Element you can render it out with the above syntax as well but this would be considered bad practice. */}
        <AnswerList answers={this.state.question.answers} />
      </main>
    )
  }
}

export default QuestionShowPage;