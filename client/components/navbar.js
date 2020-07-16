import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import logo from '../../public/images/logo.png'

//make styles bc we are working inside a functional component
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import BrushIcon from '@material-ui/icons/Brush'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#DD6E42'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    height: '9em'
  },
  headerContainer: {
    justifyContent: 'space-between'
  },
  toolbarMargin: {
    height: '2px'
  },
  font: {
    color: '#4F6D7A'
  },
  buttonStyle: {
    color: '#EAEAEA',
    borderRadius: '50%',
    backgroundColor: '#EAA286'
  }
}))

function ElevationScroll(props) {
  const {children} = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    //how far the user scrolls to trigger
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const Navbar = ({handleClick, isLoggedIn, user}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <ElevationScroll> */}
      <AppBar
        position="static"
        style={{
          background: '#DD6E42',
          boxShadow: 'none'
        }}
      >
        <Toolbar className={classes.headerContainer} disableGutters>
          <Link to="/canvas">
            <img className={classes.title} src={logo} alt="logo" />
          </Link>
          <Box className={classes.font}>
            {isLoggedIn ? (
              <React.Fragment>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Link to={`/${user.id}/canvas`}>
                    <Button color="inherit">

                      <Typography> canvas </Typography>

                    </Button>
                  </Link>

                  <Link to="/gallery">
                    <Button color="inherit">
                      <DashboardIcon />
    <Typography className={classes.font}>gallery</Typography>
   </Button>
                  </Link>

                  <Button color="inherit" onClick={handleClick}>

                    logout
                  </Button>

                  <Link to="/account">
                    <Button startIcon={<AccountCircleIcon />}> account </Button>

                  </Link>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* The navbar will show these links before you log in */}
                <Link to="/canvas">
                  <BrushIcon />
                  <Button className={classes.buttonStyle}>
                    <Typography>canvas</Typography>
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button>
                    <Typography>login</Typography>
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button>
                    <Typography>sign up</Typography>
                  </Button>
                </Link>
              </React.Fragment>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* </ElevationScroll> */}
      <div className={classes.toolbarMargin} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapState, mapDispatch)(Navbar)
