import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import QuestionNewPage from './components/QuestionNewPage';
import CurrentDateTime from './components/CurrentDateTime';
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';
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
          <Navbar />
          <Switch>
            <Route exact path='/questions'>
              <QuestionIndexPage />
            </Route>
            <Route path='/questions/new' component={QuestionNewPage}>
            </Route>
            <Route path='/questions/:id' component={QuestionShowPage}>
            </Route>
            <Route path='/pokemon'>
              <Pokemon />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;