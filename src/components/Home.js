import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Common/Navbar'

class Home extends Component {
  componentDidMount() {
    // axios.get('https://pwa2017-whats-going-on.firebaseio.com/Pin.json', {})
    // .then(res => {
    //   console.log(res.data)
    // })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="columns">
          <div className="column">
            First column
          </div>
          <div className="column">
            Second column
          </div>
          <div className="column">
            Third column
          </div>
          <div className="column">
            Fourth column
          </div>
        </div>
      </div>
    )
  }
}

export default Home