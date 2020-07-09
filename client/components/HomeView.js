import React from 'react'
import {connect} from 'react-redux'
import {fetchStickers} from '../store/sticker'
import StickerBar from './StickerBar'
import Canvas from './Canvas'
import SaveBar from './SaveBar'
import {fabric} from 'fabric'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Button from '@material-ui/core/Button'
import DrawingTool from './DrawingTool'
import {red} from '@material-ui/core/colors'

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
    // this.state = {
    //   canvas: new fabric.Canvas(document.getElementById('my-canvas'))
    // }
    // this.state = {
    //   canvas: null
    // }
  }

  componentDidMount() {
    this.props.fetchStickers()
    // this.setState({
    //   canvas: new fabric.Canvas('my-canvas')
    // })
    this.canvas = new fabric.Canvas('my-canvas')
    // this.JSON = JSON.stringify(this.canvas)
    // console.log('my canvas', this.state.canvas)
    // this.JSON = JSON.stringify(this.canvas)
  }

  addToCanvas(sticker) {
    fabric.Image.fromURL(
      sticker.imgURL,
      img => {
        img.scale(0.2)
        img.set({left: 100, top: 100})
        this.canvas
          .add(img)
          .renderAll()
          .setActiveObject(img)
      },
      {crossOrigin: 'Anonymous'}
    )
  }

  exportFile() {
    // 1) grab canvas 'DOM' element
    // 2) call ToBlob function on the canvas DOM and SaveAs.'file_name.jpeg'
    const exportCanvas = document.getElementById('my-canvas')
    exportCanvas.toBlob(function(blob) {
      saveAs(blob, 'eureka_img.jpeg')
    })
  }

  saveFile() {
    // 1) grab the canvas and convert to JSON
    // 2) make an axios request to add this JSON to DB
    console.log('saving file to DB')
    let canvasJSON = JSON.stringify(this.canvas.toDatalessJSON())
    console.log('JSON', canvasJSON)
    // console.log('toObject', this.canvas.toObject());//logs canvas as an object
    // console.log('toSVG', this.canvas.toSVG());//logs the SVG representation of canvas
  }

  drawOnCanvas() {
    console.log('drawing....')
    this.canvas.isDrawingMode = !this.canvas.isDrawingMode
    if (this.canvas.isDrawingMode) {
      document.getElementById('draw-button').innerHTML = 'Draw Mode : ON'
    } else {
      document.getElementById('draw-button').innerHTML = 'Draw Mode : OFF'
    }
  }

  clearEl() {
    this.canvas.clear()
  }

  render() {
    console.log('canvasss', this.canvas)
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

            <DrawingTool
              canvas={this.canvas}
              drawOnCanvas={this.drawOnCanvas}
            />

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
              <SaveBar
                canvas={this.canvas}
                saveFile={this.saveFile}
                exportFile={this.exportFile}
              />
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

// 1 ) this.canvas = new fabric.Canvas('my-canvas')  :: change our canvas from this.state to this.canvas
// 2 ) move drawOnCanvas from drawingTool component to HomeView component
// 3) be sure to change onClick to this.props.drawOnCanvas since the function is now pass from the Homeview component as a props
// 4) On Homeview component,  make sure to pass props on Drawing Tool compoennt (line 120)
//    - you need to pass 1) this.canvas (our canvas)   2) drawOnCanvas function
