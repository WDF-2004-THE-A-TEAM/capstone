import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'
import StickerBar from './StickerBar'
import Canvas from './Canvas'
import {fabric} from 'fabric'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  canvas: {
    width: '100%',
    height: '600px',
    backgroundColor: 'blue'
  }
})

//This should be the parent component where it manages state
class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.addToCanvas = this.addToCanvas.bind(this)
    // this.state={
    //   canvas: canvas.object
    // }
    // this.updateView = this.updateView.bind(this)
  }

  componentDidMount() {
    this.props.fetchStickers()
    this.canvas = new fabric.Canvas('my-canvas')
  }

  addToCanvas(sticker) {
    fabric.Image.fromURL(sticker.imgURL, img => {
      img.scale(0.2)
      img.set({left: 100, top: 100})
      this.canvas
        .add(img)
        .renderAll()
        .setActiveObject(img)
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <StickerBar
                addToCanvas={this.addToCanvas}
                stickers={this.props.stickers}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Canvas />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapState = state => {
  return {
    stickers: state.sticker.stickers
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStickers: () => dispatch(fetchStickers())
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(HomeView))
