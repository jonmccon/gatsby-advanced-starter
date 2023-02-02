import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl"
import { LngLat } from "mapbox-gl"




const Marker = ({ map, place }) => {
  const markerRef = useRef()
  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([place[0], place[1]])
      .addTo(map)

    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, places }) => {
  return (
    <>
      {places &&
        places.map(place => (
          <Marker key={place.title} map={map} place={place} />
        ))}
    </>
  )
}

export default Markers