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

const Markers = ({ map, places, post }) => {
  return (
    <>
      {places &&
        places.map(place => (
          <Marker key={post.title} map={map} place={place} />
        ))}
    </>
  )
}

export default Markers