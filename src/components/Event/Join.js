import React, { Component } from 'react'
import axios from 'axios'
import { loadState, deleteState } from '../../lib/localStorage'

class Join extends Component { 
  constructor(props) {
    const auth = loadState('auth')
    super(props)
    this.state = {
      data: {},
      disabled: true,
      auth, 
    }
  }
  _fetchData() {
      axios.get('https://pwa2017-whats-going-on.firebaseio.com/Pin/'+ this.props.id +'.json')
      .then((response) => {
        this.setState({ 
          data: response.data,
          disabled: response.data.numberUsers <= 0 || response.data.members.indexOf(this.state.auth.name) >= 0,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  _joinNow() {
    if (!this.state.disabled) {
      this.setState({ 
        disabled: true,
      })
      axios.patch('https://pwa2017-whats-going-on.firebaseio.com/Pin/'+ this.props.id +'.json', {
        numberUsers: this.state.data.numberUsers - 1,
        members: this.state.data.members.concat(this.state.auth.name),
      })
      .then((response) => {
        alert('OK!');
        this.props.detailReload()
      })
      .catch((error) => {
        console.log(error)
      })
    }
    return false;
  }
  componentDidMount() {
    if (this.state.auth !== undefined) {
      this._fetchData()
    }
  }
  render() {
    return (
      <a className="button is-primary" disabled={ this.state.disabled } onClick={this._joinNow.bind(this)}>
        { this.state.data.numberUsers == 0 ? 'Full' : 'Join!' }
      </a>
    )
  }
}

export default Join