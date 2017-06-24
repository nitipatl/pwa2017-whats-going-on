import React, { Component } from 'react'

import Navbar from '../Common/Navbar'

class Detail extends Component {
  componentDidMount() {
    console.log(this.props.match)
  }
  render() {
    return (
      <div>
        <Navbar />
        Event Detail
      </div>
    )
  }
}

export default Detail