import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./Map"

const MapWrapper = props => {
  const [location, setLocations] = useState([])

  useEffect(() => {
    if (props && props.data) {
      setLocations(props.data.markdownRemark.frontmatter.location)
    } else {
      setLocations([])
    }
  }, [props])

  return (
    <>
      <Map locations={location} />
    </>
  )
}

MapWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapWrapper