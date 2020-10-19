import React, { useState, useEffect } from "react";
import MapGL, { LanguageControl ,Marker ,Popup } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { setRTLTextPlugin } from "mapbox-gl";
import * as parkData from './data/skateboard-parks.json';
setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true // Lazy load the plugin
);



function Map(){
  const [viewport, setViewport] = useState({
  
  latitude:45.4211,
  longitude:-75.6983,
  zoom:11});
  const [selectedPark, setSelectedPark] = useState(null);
   
  
    
   
  return (
    
  <MapGL {...viewport}
  style={ {width: '100vw', height:'calc(100vh - 64.4px)',overflow:'hiddin'} }
  mapStyle='mapbox://styles/ayat-1997/ckg9douwf06vj19qsp2q658rs/draft'
  accessToken='pk.eyJ1IjoiYXlhdC0xOTk3IiwiYSI6ImNrZzhnNnFzOTBoMWYyd3FvcTE5eTRudDMifQ.P3qIkZkNtFIrJN6uTWKCcw'
  onViewportChange={viewport => {
    setViewport(viewport);}}>
    <LanguageControl language='ar' defaultLanguage='ar' />
    
  
    {parkData.features.map((itme)=>{
      return(
        <Marker key={itme.properties.PARK_ID}
         latitude={itme.geometry.coordinates[1]}
        longitude={itme.geometry.coordinates[0]}
        >
        <button
              className="markr-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(itme);
              }}
            >
              <img src="cell-tower.svg" alt="cell-tower" />
            </button>
        </Marker>
      )
    } 
         )
    
  }

{selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
  
  </MapGL>
  
  );}



export default Map;