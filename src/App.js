import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import {
  New as NewEvent,
  Detail as EventDetail
} from './components/Event'
import Login from './components/Login'
import Logo from './logo.png'

class App extends Component { 
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <div className="nav-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="/events-new" className="button" >
                      <span className="icon">
                        <i className="fa fa-plus"></i>
                      </span>
                      <span>New Event</span>
                    </Link>
                  </p>
                  <p className="control">
                    <Link to="/login" className="button is-primary">
                      <span className="icon">
                        <i className="fa fa-sign-in"></i>
                      </span>
                      <span>Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </nav>
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
