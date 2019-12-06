import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

import logo from '../img/logo.png'

const useStyles = makeStyles(theme => ({
	logo: {
		maxWidth: 300
	},
	image: {
		width: "100%"
	}
}))
const Header = ({links = [] }) => {
	const classes = useStyles()
  return (
    <AppBar color="default" position="static">
      <Toolbar gutter={false}>
				<div className={classes.logo}>
					<img className={classes.image} src={logo} alt="birdfeeders" />
				</div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
