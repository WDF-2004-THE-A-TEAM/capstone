import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/box'
import splashPageImage from '../../public/splash_unicorn.png'
import DrawButton from '../../public/draw_button.png'
import SignUpButton from '../../public/become_a_member.png'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
  hero: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${splashPageImage2})`,
    backgroundImage: `url(${splashPageImage})`,

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
    display: 'flex',
    marginTop: '400px'
  },
  button: {
    backgroundColor: '#e58f6d',
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
          {/* <Typography className={classes.heroFont}>
            Start your never ending story
          </Typography> */}
          <Box className={classes.buttonBox}>
            <Link to="/canvas">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={DrawButton} />
                </CardActionArea>
              </Card>
            </Link>
            <Link to="/signup">
              <ButtonBase
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<Avatar src={SignUpButton} />}
              ></ButtonBase>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default SplashPage
