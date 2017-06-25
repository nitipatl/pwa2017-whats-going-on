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
        <div className="new-event">
        <Link to="/events-new" >
          <span className="icon">
            <i className="fa fa-plus f-100"></i>
          </span>
        </Link>
        </div>
         <Link to="/login">
          <div className="login-block">Login</div>
        </Link>
       
      </nav>
    )
  }

}

export default Navbar