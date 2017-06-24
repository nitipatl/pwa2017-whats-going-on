import React, { Component } from 'react';

import Navbar from './Common/Navbar'
import '../styles/Login.css';
import FacebookLogin from 'react-facebook-login';
import bg from '../assets/images/bg.jpeg';
import { saveState } from '../lib/localStorage'

class Login extends Component {

  responseFacebook = (response) => {
    const auth = {
      name: response.name,
      email: response.email,
      expiresIn: response.expiresIn,
      avatar: response.picture.data.url
    }
    saveState('auth', auth)
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="hero is-fullheight" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className="hero-body">
            <div className="container is-center">
              <div className="wrapper">
                <FacebookLogin
                  appId="1846600289000828"
                  autoLoad={false}
                  fields="name,email,picture"
                  icon="fa-facebook"
                  textButton="Login Via Facebook"
                  size="metro"
                  callback={this.responseFacebook} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
