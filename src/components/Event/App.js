import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Home from './components/Home'
import {
  New as NewEvent,
  Detail as EventDetail
} from './components/Event'
import Login from './components/Login'

class App extends Component { 
 
  history = createHistory(this.props)

  render() {
    return (
      <Router history={this.history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/events-new" component={NewEvent} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
