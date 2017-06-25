import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Common/Navbar'
import JoinButton from './Join'
import PinMap from '../PinMap.js'

class Detail extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: '',
        imageGame: '',
        title: '',
        createAt: '',
        numberOfUsers: '',
        members: [],
      }
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
        <Navbar />
        <img src={ this.state.data.imageGame } />
        <article className="media">
          <div className="media-content">
            <div className="content content-detail">
                <h1 className="title">{ this.state.data.title }</h1>
                <p>
                    <a>
                      <span className="icon is-small"><i className="fa fa-tags"></i></span>
                    </a>
                    { this.state.data.categories && this.state.data.categories.join(' ') }
                    &nbsp;&nbsp;
                </p>
                <p>
                    <a>
                      <span className="icon is-small"><i className="fa fa-users"></i> </span>
                    </a>
                    &nbsp; { this.state.data.members.length } / { this.state.data.numberOfUsers }
                    &nbsp;&nbsp;                  
                  </p>
                <p>
                { this.state.data.descriptions }
                </p>
                <p>
                  <div className="subtitle is-6">{ this.state.data.name } <small>{ this.state.data.createAt }</small></div>
                </p>
                
                <p className="margin-top-10">
                    <JoinButton detailReload={this._fetchData.bind(this)} id={ this.props.match.params.id } />
                </p>
            </div>
            <div><PinMap pinid={this.props.match.params.id}/></div>
            
          </div>
        </article>
      </div>
    )
  }
}

export default Detail