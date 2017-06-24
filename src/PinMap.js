import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Map, {GoogleApiWrapper} from './Map'

class PinMap extends Component {
  
  

  getInitialState () {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  onMapMoved (props, map) {
    const center = map.center;
  }
  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onInfoWindowClose () {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  onMapClicked (props) {
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

    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClicked}
          onDragend={this.onMapMoved} />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAMKm8sG8J_fYSLGf3oxUNfNLNM2SvRr2c"
})(PinMap)
