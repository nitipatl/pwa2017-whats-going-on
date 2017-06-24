import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Detail extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  _fetchData() {
    axios.get('https://pwa2017-whats-going-on.firebaseio.com/Pin/'+ this.props.match.params.id +'.json')
      .then((response) => {
        this.setState({ 
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this._fetchData()
  }
  render() {
    return (
      <div>
        <article className="media">
          <figure className="media-left">
            <p className="image is-96x96">
              <img src={ this.state.data.imageGame } />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{ this.state.data.name }</strong> <small>{ this.state.data.createAt }</small>
                <br />
                <h3>{ this.state.data.title }</h3>
                { this.state.data.descriptions }
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-tags"></i></span>
                </a>
                { this.state.data.categories && this.state.data.categories.join(' ') }
                &nbsp;&nbsp;
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-users"></i></span>
                </a>
                &nbsp;{ this.state.data.numberUsers }
                &nbsp;&nbsp;
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-users"></i></span>
                </a>
                &nbsp;{ this.state.data.members && this.state.data.members.join(', ') }
              </div>
            </nav>
          </div>
        </article>
      </div>
    )
  }
}

export default Detail