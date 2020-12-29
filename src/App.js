import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
// import QuestionNewPage from './components/QuestionNewPage';
import NewQuestionForm from './components/NewQuestionForm'
// import CurrentDateTime from './components/CurrentDateTime1';
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import {NotFoundPage} from './components/NotFoundPage';

import { Session } from './requests';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then(user => {
        console.log(user);
        this.setState((state) => {
          return {
            user: user
          }
        })
      })
  }

  handleSubmit(params) {
    // params looks like: { email: 'js@winterfell.gov', password: 'supersecret' }
    console.log(this);
    Session.create(params)
    .then(() => {
      return Session.currentUser()
    })
    .then(user => {
      console.log('user: ', user);
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  destroySession() {
    Session.destroy()
      .then(res => {
        this.setState((state) => {
          return {
            user: null
          }
        })
      })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
            <Route exact path='/questions'>
              <QuestionIndexPage />
            </Route>
            <AuthRoute exact
              path='/questions/new'
              isAuth={this.state.user}
              component={NewQuestionForm}
            />
            <Route exact path='/questions/:id' component={QuestionShowPage}>
            </Route>
            <Route exact path='/pokemon'>
              <Pokemon />
            </Route>
            <Route exact path='/sign_in' render={(routeProps) => <SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>}/>
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;