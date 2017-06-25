import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Common/Navbar'
import PinCard from './Event/PinCard'
import PinMap from './PinMap.js'


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

      this.setState({
        pins: [{
            id: 0,
            title: 'หาคนรู้ใจมาเล่นเกม Uno spin',
            descriptions: 'มาเล่นเกมกันบ้านเรามีเกมเล่นเยอะเลย มีของกินอร่อย ๆ เพียบ แอร์พร้อม wi-fi ฟรี',
            cood_x: 100.4660867,
            cood_y: 13.7138229,
            categories: ['co-op', 'board', 'Adventure', 'party'],
            createAt: '25/06/2560 17:54:23',
            createBy: 'top.collection.it@gmail.com',
            imageGame: 'https://i.ytimg.com/vi/ckUQse-kWv4/maxresdefault.jpg',
            members: [{name: 'Khing', token: 'cxasdadsadsdad', image: 'http://static.goal.com/4323400/4323432_news.jpg'}],
            name: 'TOPz',
            numberOfUsers: 6,
            userId: '1112'
          }]
      })
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="header-title">
        </div>
        <div><PinMap></PinMap></div>
        <div className="wrapper-pin-card">
          <div className="scroll is-half is-offset-one-quarter"></div>
          <h1 className="subtitle is-4 text-center"><p>meet new friend around </p><p>and let's them play</p></h1>
          {/*<div className="columns is-multiline pin-card">
            {
              this.state.pins.map((pin, index) => <PinCard key={`PinCard-${index}`} {...pin} id={index} />)
            }
          </div>*/}
        </div>
      </div>
    )
  }
}

export default Home