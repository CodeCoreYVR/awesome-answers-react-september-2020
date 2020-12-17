import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import { Session } from './requests';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }
  }

  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path='/questions'>
            <QuestionIndexPage />
          </Route>
          <Route path='/questions/:id' component={QuestionShowPage}>
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;