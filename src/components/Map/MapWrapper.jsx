import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./Map"

const MapWrapper = props => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    if (props && props.data) {
      setPlaces(props.data.markdownRemark.frontmatter.places)
    } else {
      setPlaces([])
    }
  }, [props])

  return (
    <>
      <Map places={places} />
    </>
  )
}

MapWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapWrapper