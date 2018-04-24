import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Container, Content, Body } from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import LoadingView from 'react-native-loading-view';
import SearchBar from '../SearchBar';
import MapTiles from '../MapTiles';
import NewHeader from '../MapHeader';
import FAB from '../FAB';
import Footer from '../Footer';


var customToilet = require('../101.jpg');
var customParking = require('../Parking.png');
var customArena = require('../Arena.png');
var customBed = require('../Bed.png');
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const searchDetails = {};

export default class Map extends Component {

  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      tiles: [],
      mapStyle: {},
      originDetails: {},
      destinationDetails: {},
      routeTile: [],
      // loading: true
      originDefined: false,
      destinationDefined: false
    }
  }
  

  renderOriginMarker() {
    if (this.state.originDefined) {
      console.log('hej');
      return (
        <MapView.Marker
          style={{ height: 1 }}
          coordinate={this.state.originDetails}
          pinColor={'red'}
        />
      );
    }
  }

  renderDestinationMarker() {
    if (this.state.destinationDefined) {
      return (
        <MapView.Marker
          style={{ height: 1 }}
          coordinate={this.state.destinationDetails}
          pinColor={'green'}
        />
      );
    }
  }

  renderRoute() {
    console.log('legend');
    if (this.state.originDefined && this.state.destinationDefined) {
      return (
        <MapViewDirections
          origin={this.state.originDetails}
          destination={this.state.destinationDetails}
          apikey="AIzaSyA9Byks-4BNqpvXaon-vrYpF2uBRn6FSKQ"
          strokeWidth={5}
          strokeColor='yellow'
          mode='walking'
        />
      );
    }
  }

  updateStyle() {
    this.setState({
      mapStyle: {
        height: '100%',
        width: '100%'
      }
    })
  }

  componentWillMount() {
    setTimeout(() => this.updateStyle(), 1000);
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    axios.get('https://api.myjson.com/bins/iugzr')
      .then(response => this.setState({ tiles: response.data }))
      .catch((error) => {
        alert(error.message)
      });
  };

  // componentDidMount = () => {
  //   // This is just ment as an example of how you handle an asynchronus operation 
  //   // In reality this might be a fetch or storage access 
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false
  //     })
  //   }, 8000)
  // }

  // componentDidMount() {
  //     this.getDirections("18.299425, 57.636907", "18.301871, 57.635942")
  // }

  // async getDirections(startLoc, destLoc) {
  //     console.log(this.state.coords);
  //     try {
  //         let resp = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=${ 18.299425, 57.636907 }&destination=${ 18.301871, 57.635942 }')
  //         let respJson = await resp.json();
  //         let points = PolyLine.decode(respJson.routes[0].overview_polyline.points);
  //         let coords = points.map((point, index) => {
  //             return {
  //                 latitude: point[0],
  //                 longitude: point[1]
  //             }
  //         })
  //         this.setState({coords: coords})
  //         return coords
  //     } catch(error) {
  //         return error
  //     }
  // }

  originCallback = (detailsFromSearch) => {
    this.setState({ originDetails: detailsFromSearch, originDefined: true })
    console.log('originDetails: ', this.state.originDetails);
  };

  destinationCallback = (detailsFromSearch) => {
    this.setState({ destinationDetails: detailsFromSearch, destinationDefined: true })
    console.log('destinationDetails: ', this.state.destinationDetails);
  }



  renderTiles() {
    console.log(this.state.originDetails)
    return this.state.tiles.map(tile =>
      <MapTiles key={tile.origin} tile={tile} />
    );
    //   setTimeout(() => {
    //         this.setState({
    //           loading: false
    //         })
    //       }, 8000)
  }


  render() {
    const { width, height } = Dimensions.get('window');
    const ratio = width / height;
    const onMap = true;
    return (
      <Container>
        <NewHeader />
        {/* <LoadingView loading={this.state.loading}> */}
        <Content>
          <SearchBar callbackFromParent={this.originCallback} placeholder={'Från'} />
          <SearchBar callbackFromParent={this.destinationCallback} placeholder={'Till'} />
          <View style={{ width, height }}>

            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.container}
              initialRegion={{
                latitude: 57.637545, 
                longitude: 18.293706,
                latitudeDelta: 0.00012,
                longitudeDelta: 0.020
              }}
            >
              <MapView.Marker
                style={{ height: 1}}
                coordinate={{ longitude: 18.292853, latitude: 57.641380 }}
                title={'Tillgänglighetsarenan'}
                image={customArena}
                // pinColor={'blue'}
              />
              <MapView.Marker
                style={{ height: 1 }}
                coordinate={{ longitude: 18.2800916, latitude: 57.6317496 }}
                title={'Scandic Visby'}
                pinColor={'blue'}
                image={customBed}
              />
              <MapView.Marker
                style={{ height: 1 }}
                coordinate={{ longitude: 18.2892483, latitude: 57.6402041 }}
                title={'Tillgängliga toaletter'}
                pinColor={'blue'}
                image={customToilet}
              />
              <MapView.Marker
                style={{ height: 1 }}
                coordinate={{ longitude: 18.288044, latitude: 57.6376372 }}
                title={'Parkeringsplats'}
                pinColor={'blue'}
                image={customParking}
              />
              {this.renderOriginMarker()};
              {this.renderDestinationMarker()};
              {this.renderRoute()};
              {this.renderTiles()};
            </MapView>
            <FAB />
          </View>
        </Content>
        {/* </LoadingView> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});




    // AppRegistry.registerComponent('MapExample', () => MapExample);
//{this.renderTiles()}

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// let { width, height } = Dimensions.get('window');

// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
/*

const coordinates = [
  {
    latitude: 18.2954925,
    longitude: 57.6408186
  },
  {
    latitude: 18.2946771,
    longitude: 57.6409392
  }
];

<MapViewDirections
              //origin={{ longitude: 18.2925582, latitude: 57.6354749 }}
              //destination={{ longitude: 18.2982713, latitude: 57.6384871 }}
              origin={coordinates[0]}
              destination={coordinates[1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="blue"
            />
// class Map extends Component {
    
//     constructor() {
//       super();

//       this.state = {
//         region: {
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }
//       };
//     }

//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             this.setState({
//               region: {
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 latitudeDelta: LATITUDE_DELTA,
//                 longitudeDelta: LONGITUDE_DELTA,
//               }
//             });
//           },
//         (error) => console.log(error.message),
//         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//         );
//         this.watchID = navigator.geolocation.watchPosition(
//           position => {
//             this.setState({
//               region: {
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 latitudeDelta: LATITUDE_DELTA,
//                 longitudeDelta: LONGITUDE_DELTA,
//               }
//             });
//           }

//         );
//     }

//     componentWillUnmount() {
//       navigator.geolocation.clearWatch(this.watchID);
//     }

//     render() {
//       return (
//         <MapView
//           provider={ PROVIDER_GOOGLE }
//           style={ styles.container }
//           showsUserLocation={ true }
//           region={ this.state.region }
//           onRegionChange={ region => this.setState({region}) }
//           onRegionChangeComplete={ region => this.setState({region}) }
//         >
//           <MapView.Marker
//             coordinate={ this.state.region }
            
//           />
        //   <MapView.Marker
        //     coordinate={{ longitude: 18.292853, latitude: 57.641380 }}
        //     title={'Tillgänglighetsarenan'}
        //     pinColor={'blue'}
        //   />
        // </MapView>
//       );
//     }
//   }

//   const styles = StyleSheet.create({
//     container: {
//       height: '100%',
//       width: '100%',
//     }
//   });

*/







// import React, { Component } from 'react';
// import { Dimensions, StyleSheet } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyA9Byks-4BNqpvXaon-vrYpF2uBRn6FSKQ';

// class Map extends Component {

//   constructor(props) {
//     super(props);

//     // AirBnB's Office, and Apple Park
//     this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812,
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
//     };

//     this.mapView = null;
//   }

//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

//   render() {
//     return (
//       <MapView
//       provider={ PROVIDER_GOOGLE }
//         initialRegion={{
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }}
//         style={StyleSheet.absoluteFill}
//         ref={c => this.mapView = c}
//         onPress={this.onMapPress}
//       >
//         {this.state.coordinates.map((coordinate, index) =>
//           <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
//         )}
//         {(this.state.coordinates.length >= 2) && (
//           <MapViewDirections
//             origin={this.state.coordinates[0]}
//             waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
//             destination={this.state.coordinates[this.state.coordinates.length-1]}
//             apikey={GOOGLE_MAPS_APIKEY}
//             mode={'walking'}
//             strokeWidth={3}
//             strokeColor="hotpink"
//             onStart={(params) => {
//               console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
//             }}
//             onReady={(result) => {
//                 console.log(result)
//               this.mapView.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                   right: (width / 20),
//                   bottom: (height / 20),
//                   left: (width / 20),
//                   top: (height / 20),
//                 }
//               });
//             }}
//             onError={(errorMessage) => {
//               // console.log('GOT AN ERROR');
//             }}
//           />
//         )}
//       </MapView>
//     );
//   }
// }

// export default Map;