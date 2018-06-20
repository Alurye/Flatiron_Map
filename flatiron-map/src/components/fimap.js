import React from 'react';
// import LeafletMap from 'leaflet';
// import semantic from 'semantic-ui';
import { Button, Header} from 'semantic-ui-react'
import {Map, TileLayer, Marker, Popup, Polygon} from 'react-leaflet';

const BorgCorner1 = [49.673526328028736,-136.5708735774412];
const BorgCorner2 = [30.90222470517144, -135.9490414488222];
const BorgCorner3 = [31.359392871484268, -67.55845605431811];
const BorgerCorner4 = [52.05249047600099, -67.92242473947698];

const roomCoordinates = {
     Turing: [-47.98992166741418, -124.62890625000001],
     Kay: [20.3034175184893, -123.22265625000001],
     Borg: [41.376808565702355, -126.56250000000001],
     MensRoom: [-24.367113562651262,102.83203125],
     GirlsRoom: [7.885147283424331, 105.46875000000001],
     Hopper: [-37.99616267972813, 13.359375000000002],
     PhoneBooths: [32.694865977875075, -62.05078125000001]
}


class FIMap extends React.Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 2,
    mapClicked:false,
    fullView: {
      lat: 0,
      lng: 0
    }

  }

  markerClick = (e) => {
    this.setState({
      mapClicked: !this.state.mapClicked,
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      zoom:3
    })
  }

  // handleClick = (e) => {
  //     // alert(e.latlng);
  //     // console.log(e.latlng);
  //   this.setState({
  //     lat: e.latlng.lat,
  //     lng: e.latlng.lng,
  //     zoom: 3,
  //     fitBounds: [BorgCorner1,BorgCorner2]
  //   });
  // }




// <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
  render() {

   console.log(this.state.lat, this.state.lng);
    const position = [this.state.lat, this.state.lng];

    return (
      <Map 
           center={position}
           minZoom={1}
           maxZoom={4}

           zoom={this.state.zoom}>

           {this.state.mapClicked ?  <TileLayer continousWorld={false} noWrap={true}
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url='/active-map/{z}/{x}/{y}.png'

             />: <TileLayer continousWorld={false} noWrap={true}
                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url='/map-2/{z}/{x}/{y}.png'

               /> }


      <Marker onClick={this.markerClick} position={roomCoordinates.Borg}>
          <Popup>
          <h3>This is where Mod 1 lives.</h3>

          </Popup>
        </Marker>
        <Marker position={roomCoordinates.Kay}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={roomCoordinates.Hopper}>
          <Popup>
            <h3>This is where mod 5 lives</h3>

          </Popup>
        </Marker>
        <Marker position={roomCoordinates.Kay}>
          <Popup>
            <Button>Reserve </ Button>
          </Popup>
        </Marker>
        <Marker position={roomCoordinates.MensRoom}>
          <Popup>
            <h3>Bathroom Code:<br/> 21511</h3>
          </Popup>
        </Marker>
        <Marker position={roomCoordinates.GirlsRoom}>
          <Popup>
            <h3>Bathroom Code:<br/> 11280</h3>
          </Popup>
        </Marker>
        <Marker position={roomCoordinates.Turing}>
          <Popup>
            <Button>Reserve </ Button>
          </Popup>
        </Marker>
        <Marker position={roomCoordinates.PhoneBooths}>
          <Popup>
            <h3>PhoneBooths</h3>
            <Button>Reserve</Button>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default FIMap;
