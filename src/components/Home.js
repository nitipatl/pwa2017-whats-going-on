import React, { Component } from 'react'
import axios from 'axios';

import Navbar from './Common/Navbar'
import PinCard from './Event/PinCard'

class Home extends Component {
  state = {
    pins: []
  }
  componentDidMount() {
    axios.get('https://pwa2017-whats-going-on.firebaseio.com/Pin.json', {})
    .then(res => {
      this.setState({
        pins: res.data
      }) 
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="columns is-multiline is-mobile pin-card">
          {
            this.state.pins.map((pin, index) => <PinCard key={`PinCard-${index}`} {...pin} id={index} />)
          }
        </div>
      </div>
    )
  }
}

export default Home