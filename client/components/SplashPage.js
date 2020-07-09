import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/box'
import splashPageImage from '../../public/SplashPage.jpg'
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${splashPageImage})`,
    height: '100%',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '3rem'
  },
  heroFont: {
    color: '#fff',
    fontSize: 60
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonBox: {
    justifyContent: 'center',
    display: 'flex'
  },
  button: {
    backgroundColor: '#ADEDCC',
    color: '#555',
    margin: '0 10px',
    width: '150px'
  }
}))

function SplashPage() {
  const classes = useStyles()

  return (
    <div>
      <Box pl={0} className={classes.hero}>
        <Box className={classes.buttonContainer}>
          <Typography className={classes.heroFont}>
            Start your never ending story
          </Typography>
          <Box className={classes.buttonBox}>
            <Link to="/canvas">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
              >
                Draw
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
              >
                Become a StoryTeller
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default SplashPage
