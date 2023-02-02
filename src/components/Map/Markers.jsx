import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl"
import { LngLat } from "mapbox-gl"




const Marker = ({ map, location }) => {
  const markerRef = useRef()
  console.log(location)
  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([location[0], location[1]])
      .addTo(map)

    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, locations }) => {
  return (
    <>
      {locations &&
        locations.map(location => (
          <Marker key={location.title} map={map} location={location} />
        ))}
    </>
  )
}

export default Markers