import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import logo from '../../public/images/logo.png'
import {borders} from '@material-ui/system'
//make styles bc we are working inside a functional component
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Fade from '@material-ui/core/Fade'
import Tooltip from '@material-ui/core/Tooltip'
//icons
import ColorLensIcon from '@material-ui/icons/ColorLens'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BurstModeRoundedIcon from '@material-ui/icons/BurstModeRounded'
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    backgroundColor: '#DD6E42',
    padding: 2,
    margin: '1px'
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
    backgroundColor: '#EAA286',
    padding: 28,
    marginRight: '24px'
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
      <Container></Container>
      {/* <ElevationScroll> */}
      <AppBar
        disableGutters
        position="static"
        style={{
          background: '#DD6E42',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          className={classes.headerContainer}
          maxwidth="lg"
          disableGutters
        >
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
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="CANVAS"
                    placement="bottom"
                    arrow
                  >
                    <Link to={`/${user.id}/canvas`}>
                      <Button className={classes.buttonStyle}>
                        <ColorLensIcon />
                      </Button>
                    </Link>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="GALLERY"
                    placement="top"
                    arrow
                  >
                    <Link to={`/${user.id}/gallery`}>
                      <Button className={classes.buttonStyle}>
                        <BurstModeRoundedIcon />
                      </Button>
                    </Link>
                  </Tooltip>

                  {/* <Link to={`/${user.id}/gallery`}>
                    <Button className={classes.buttonStyle}>
                      <Typography className={classes.font}>gallery</Typography>
                    </Button>
                  </Link> */}

                  <Button className={classes.buttonStyle} onClick={handleClick}>
                    logout
                  </Button>

                  {/* <Link to={`/${user.id}/account`}> */}

                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="LOG OUT"
                    placement="bottom"
                    arrow
                  >
                    <Button
                      className={classes.buttonStyle}
                      onClick={handleClick}
                    >
                      <EmojiPeopleRoundedIcon />
                    </Button>
                  </Tooltip>
                  {/* </Link> */}

                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="ACCOUNT"
                    placement="top"
                    arrow
                  >
                    <Link to={`/${user.id}/account`}>
                      <Button className={classes.buttonStyle}>
                        <AccountCircleIcon />
                      </Button>
                    </Link>
                  </Tooltip>
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {/* The navbar will show these links before you log in */}
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="CANVAS"
                    placement="bottom"
                    arrow
                  >
                    <Link to="/canvas">
                      <Button className={classes.buttonStyle}>
                        <ColorLensIcon />
                      </Button>
                    </Link>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="LOG IN"
                    placement="top"
                    arrow
                  >
                    <Link to="/signin">
                      <Button className={classes.buttonStyle}>
                        <PersonPinIcon />
                      </Button>
                    </Link>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{timeout: 600}}
                    title="SIGN UP"
                    placement="bottom"
                    arrow
                  >
                    <Link to="/signup">
                      <Button className={classes.buttonStyle}>
                        <PersonAddIcon />
                      </Button>
                    </Link>
                  </Tooltip>
                </Grid>
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
