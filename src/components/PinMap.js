import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Map, {GoogleApiWrapper} from './Map'
import Marker from '../../src/components/Marker'
import InfoWindow from '../../src/components/InfoWindow'

class PinMap extends Component {
  constructor () {    
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  } 

  _fetchData = () => {
    axios.get('https://pwa2017-whats-going-on.firebaseio.com/Pin.json')
      .then((response) => {
        this.setState({ 
          pins: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount = () => {
    this._fetchData()
  }
  
  onMapMoved = (props, map) => {
    const center = map.center;
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render () {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } 

    console.log(this.state.pins)
    
    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClicked}
          onDragend={this.onMapMoved} >

          {
            this.state.pins && this.state.pins.map((pin) => {
              return (<Marker
              onClick={this.onMarkerClick}
              title={pin.title}
              name={pin.title}
              position={{lat: pin.cood_y, lng: pin.cood_x}} />)
            })
          }

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
          
          
          {/*<Marker
              onClick={this.onMarkerClick}
              title={'pin.title'}
              name={'pin.title'}
              position={{lat: 13.715086099999999, lng: 100.46713179999999}} />
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>*/}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMKm8sG8J_fYSLGf3oxUNfNLNM2SvRr2c"
})(PinMap)
