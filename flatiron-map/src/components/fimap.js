import React from 'react';
// import LeafletMap from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

class FIMap extends React.Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 1
  }

  handleClick = (e) => {
      // alert(e.latlng);
      // console.log(e.latlng);
    this.setState({
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      zoom: 3
    });
  }

  // <Marker position={position}>
  //   <Popup>
  //     A pretty CSS3 popup. <br/> Easily customizable.
  //   </Popup>
  // </Marker>

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map onClick={(e) => this.handleClick(e)} center={position} minZoom={1} maxZoom={4} zoom={this.state.zoom}>
        <TileLayer continousWorld={false} noWrap={true}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='/map/{z}/{x}/{y}.png'

        />

      </Map>
    );
  }
}

export default FIMap;
