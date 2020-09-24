import * as React from 'react';
import {Card} from './Card.js';
import '../css/Card.css';

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();
  lat = 0;
  long = 0;
  apiKey = 'NU6enez-BoXwzhlae5czA3JS8UzkTuDWg8cUtToWeME';

  state = {
    // The map instance to use during cleanup
    map: null,
    isEmptyState: false,
  };



  componentDidMount() {

    const H = window.H;
    const platform = new H.service.Platform({
        apikey: this.apiKey
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Europe
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
    window.addEventListener('resize', () => map.getViewPort().resize());

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);
 
    this.setState({ map });
    this.setUpClickListener(map);

  }

   setUpClickListener(map) {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', evt => {
      var coord = map.screenToGeo(evt.currentPointer.viewportX,
              evt.currentPointer.viewportY);
      this.lat = Math.abs(coord.lat.toFixed(4));
      this.long = Math.abs(coord.lng.toFixed(4)); 

      this.setState({ isEmptyState : true })
      
      this.getProperties();
    });

  };


  getProperties() {

    fetch('/api/properties?' +  new URLSearchParams({
      lat: this.lat,
      long: this.long,
      apiKey:this.apiKey
    }))
    .then(res => res.json())
    .then(res => { this.setState({ places: res.results })});
  }
  


  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

   

  render() {
    return (
      // Set a height on the map so it will display
      <div class="container">
        <div class="box" ref={this.mapRef} style={{ height: "500px" }} />
        <div class="stack-top"> {this.state.isEmptyState && <Card places = {this.state.places} /> }</div> 
      </div>
    );
  }
}