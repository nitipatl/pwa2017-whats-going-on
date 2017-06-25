import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { loadState, deleteState } from '../../lib/localStorage'
import Logo from '../../logo.png'

class Navbar extends Component {
  state = {
    auth: {
      userID: '',
      name: '',
      email: '',
      avatar: '',
      expiresIn: '',
    }
  }
  componentDidMount() {
    const auth = loadState('auth')
    if(auth !== undefined) {
      this.setState({
        auth
      })
    }
  }

  logout = () => {
    deleteState('auth')
    this.setState({
      auth: {
        userID: '',
        name: '',
        email: '',
        avatar: '',
        expiresIn: '',
      }
    })
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <img src={Logo} alt="Logo" className="margin-right-10" /> MEE TOO
          </Link>
        </div>
        {
          this.state.auth.name !== ''
          &&
          <div className="nav-center">
            <div className="nav-item">
              <img className="avatar" src={this.state.auth.avatar} alt="Image" />
            </div>
            <div className="nav-item">
              {this.state.auth.name}
            </div>
          </div>
        }
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
              {
                this.state.auth.name === ''
                ?
                  <p className="control">
                    <Link to="/login" className="button is-primary">
                      <span className="icon">
                        <i className="fa fa-sign-in"></i>
                      </span>
                      <span>Login</span>
                    </Link>
                  </p>
                :
                  <p className="control">
                    <a className="button is-primary" onClick={this.logout}>
                      <span className="icon">
                        <i className="fa fa-sign-out"></i>
                      </span>
                      <span>Logout</span>
                    </a>
                  </p>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar