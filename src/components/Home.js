import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Common/Navbar'
import PinCard from './Event/PinCard'
import PinMap from './PinMap.js'


class Home extends Component {
  state = {
    pins: {}
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
        <div className="header-title">
        </div>
        <div><PinMap/></div>
        <div className="wrapper-pin-card">
          <div className="scroll is-half is-offset-one-quarter"></div>
          <h1 className="subtitle is-4 text-center upper"><p>meet new friend around </p><p>and let's them play</p></h1>
          <div className="columns is-multiline pin-card">
            {
              this.state.pins && Object.keys(this.state.pins).map((key, index) => {
                return (<PinCard key={`PinCard-${key}`}  pinId={key} {...this.state.pins[key]}/>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home