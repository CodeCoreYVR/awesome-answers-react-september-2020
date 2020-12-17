import React, { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1]
    }
  }

  render() {
    return (
      <div>
        {/* <QuestionIndexPage/>
        <QuestionShowPage/> */}
        {
          this.state.clocksCount.map((c, i) => {
            return <CurrentDateTime key={i} shouldShowTime={true}/>
          })
        }
      </div>
    )
  }
}

export default App;