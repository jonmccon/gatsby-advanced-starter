import React, { useRef, useEffect, useState } from "react"
// import mapboxgl, { LngLat } from "!mapbox-gl"
window.mapboxgl = require('!mapbox-gl');
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from "./markers"
import "mapbox-gl/dist/mapbox-gl.css"



// replace with your own Mapbox token
// const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_TOKEN
const MAPBOX_TOKEN = "pk.eyJ1Ijoiam9ubWNjb24iLCJhIjoiQWVoLVpOSSJ9.6il_HmjZk8GutChm_5cGew"

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const Map = props => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)
  

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/jonmccon/clb34caiz000l15l41kb0mc7k",
      center: [-122.32829408491192, 47.59954740430254],
      zoom: 10,
    })

    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  useEffect(() => {    
    
    if (!map) return

    // if (props.location && props.location.length !== 0) {
    if (props.locations) {
      const coords = []
      props.locations.forEach( locations => {
        coords.push([props.locations[1], props.locations[0]])
      })
      const feature = multiPoint(coords)
      const box = bbox(feature)

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 40,
          maxZoom: 14,
          duration: 2000,
        }
        
      )
      console.log(props.locations)
    } else {
      map.easeTo({
        center: [0,0],
        zoom: 5,
        duration: 500,
      })
      // console.log(props.locations)
    }
  }, [map, props.locations])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {props.location && map && <Markers map={map} locations={props.location} />}
    </div>
  )
}

export default Map