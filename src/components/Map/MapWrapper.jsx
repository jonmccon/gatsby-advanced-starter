import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"

const MapWrapper = props => {
  const [locations, setlocations] = useState([])

  useEffect(() => {
    if (props && props.data) {
      setlocations(this.props.data.markdownRemark.frontmatter.location)
    } else {
      setlocations([])
    }
  }, [props])

  return (
    <>
      <Map locations={locations} />
    </>
  )
}

MapWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapWrapper