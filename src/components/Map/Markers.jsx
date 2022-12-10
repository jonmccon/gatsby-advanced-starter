import React, { useRef, useEffect } from "react"
import mapboxgl from "!mapbox-gl"

const Marker = ({ map, location }) => {
  const markerRef = useRef()

  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([location[1], location[0]])
      .addTo(map)

    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, location }) => {
  return (
    <>
      {location &&
        location.map(location => (
          <Marker key={title} map={map} location={location} />
        ))}
    </>
  )
}

export default Markers