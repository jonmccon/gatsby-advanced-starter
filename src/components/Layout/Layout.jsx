// layout.js
import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
      <div>
        <main>{children}</main>
      </div>
  )
}

export default Layout