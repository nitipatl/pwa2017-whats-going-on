import React, { Component } from 'react';
import './Login.css';
import FacebookLogin from 'react-facebook-login';
import bg from './assets/images/bg.jpeg';

class Login extends Component {

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    return (
      <section className="hero is-fullheight" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
        <div className="hero-body">
          <div className="container is-center">
            <div className="wrapper">
              <FacebookLogin
                appId="1846600289000828"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
