import React from 'react'
import {connect} from 'react-redux'
import {fetchStickers} from '../store/sticker'
import StickerBar from './StickerBar'
import Canvas from './Canvas'
import {fabric} from 'fabric'

import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import DrawingTool from './DrawingTool'

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
    this.clearEl = this.clearEl.bind(this)

    this.state = {
      canvas: new fabric.Canvas('my-canvas')
    }
  }

  componentDidMount() {
    this.props.fetchStickers()

    this.setState({
      canvas: new fabric.Canvas('my-canvas')
    })
  }

  addToCanvas(sticker) {
    fabric.Image.fromURL(sticker.imgURL, img => {
      img.scale(0.2)
      img.set({left: 100, top: 100})
      this.state.canvas
        .add(img)
        .renderAll()
        .setActiveObject(img)
    })
  }

  clearEl() {
    this.canvas.clear()
  }

  render() {
    const {classes} = this.props
    console.log('canvas=>', this.state.canvas)
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

            <DrawingTool canvas={this.state.canvas} />

            <Button
              onClick={() => {
                this.clearEl()
              }}
            >
              clear
            </Button>
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
