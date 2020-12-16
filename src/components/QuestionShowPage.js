import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';

class QuestionShowPage extends Component {
  // `this` refers to an instance of QuestionShowPage
  // to access props given to QuestionShowPage we use `this.props`
  render() {
    return (
      <main>
        <QuestionDetails
          title={ this.props.question.title }
          body={ this.props.question.body }
          author={ this.props.question.author }
          view_count={ this.props.question.view_count }
          created_at={new Date(this.props.question.created_at)}
          updated_at={new Date(this.props.question.updated_at)}
        />
        <h2>Answers:</h2>
        {/* { AnswerDetails({body: 'blue', author: { full_name: 'bugs bunny'}, created_at: new Date()})} */}
        {/* Because AnswerDetails is just a function that returns a React Element you can render it out with the above syntax as well but this would be considered bad practice. */}
        <AnswerList answers={this.props.question.answers} />
      </main>
    )
  }
}

export default QuestionShowPage;