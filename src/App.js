import React from 'react';
import MapGL, { LanguageControl } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { setRTLTextPlugin } from "mapbox-gl";
setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true // Lazy load the plugin
);




class App extends React.Component {
  state={
  style:{ width: '100vw', height: '100vh' },
  mapStyle:'mapbox://styles/ayat-1997/ckg9douwf06vj19qsp2q658rs/draft',
  accessToken:'pk.eyJ1IjoiYXlhdC0xOTk3IiwiYSI6ImNrZzhnNnFzOTBoMWYyd3FvcTE5eTRudDMifQ.P3qIkZkNtFIrJN6uTWKCcw',
  latitude:33.318796666666664,
  longitude:44.30550899999999,
  zoom:11}
   
  render(){
  return (
    <div>
 
  <MapGL {...this.state}
  onViewportChange={viewport => {
    this.setState(viewport);}}
    
  >

    <LanguageControl language='ar' defaultLanguage='ar' />
  </MapGL>
    </div>
  );}
}

export default App;