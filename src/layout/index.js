import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"

import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <>
			<Header />
      <CssBaseline />
      {children}
    </>
  )
}

export default Layout
