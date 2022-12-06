import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"

const MapWrapper = props => {
  // const children = props.children
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
      <div>
        <Map places={places} />
      </div>
    </>
  )
}

MapWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapWrapper