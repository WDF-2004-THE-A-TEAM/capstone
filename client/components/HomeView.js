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
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import DrawingTool from './DrawingTool'
import TextTool from './TextTool'
import Remove from './Delete'
import {fetchAllStories} from '../store/stories'
// import {fetchPageToEdit} from '../store/pages'
import axios from 'axios'

import Container from '@material-ui/core/Container'
import {grey} from '@material-ui/core/colors'
import Navbar from './navbar'

import ToolBar from './ToolBar'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#C0D6DF'
  },
  stickerBar: {
    padding: theme.spacing(4),
    textAlign: 'center',
    height: '800px'
  },
  canvas: {
    width: '100%',

    height: '600px',
    backgroundColor: 'blue'

  },
  container: {
    backgroundColor: '#C0D6DF'
  }
})

//This should be the parent component where it manages state
class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.addToCanvas = this.addToCanvas.bind(this)
    // this.clearEl = this.clearEl.bind(this)
  }

  componentDidMount() {
    //WHY IS THIS NOT WORKING WHEN REFRESHING???
    let pageId = this.props.match.params.pageId

    if (!pageId) {
      // if pageId isn't exits, then create new canvas
      this.canvas = new fabric.Canvas('my-canvas', {backgroundColor: 'white'})
    } else {
      // render canvas by Id
      const {data} = axios.get(`/api/pages/${pageId}`)
      console.log('homeview data', data)
      const canvasJSON = data.canvasPage

      // console.log(canvasJSON)
      this.canvas = new fabric.Canvas('my-canvas', {backgroundColor: 'white'})
      this.canvas.loadFromJSON(canvasJSON)

      this.canvas.loadFromJSON(canvasJSON)
    }

    this.props.fetchStickers()

    this.props.fetchAllStories(this.props.match.params.userId)
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

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>

        <Container maxwidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              {/* <Paper className={classes.stickerBar}>

              <StickerBar
                addToCanvas={this.addToCanvas}
                stickers={this.props.stickers}
              />
            </Paper> */}


              <ToolBar canvas={this.canvas} />
              <Remove canvas={this.canvas} />
            </Grid>
            <Grid item xs="12">
              <Paper className={classes.paper}>
                <h1> canvas </h1>
                <SaveBar
                  canvas={this.canvas}
                  saveFile={this.saveFile}
                  exportFile={this.exportFile}
                  user={this.props.user}
                  stories={this.props.stories}
                  pageId={this.props.match.params.pageId}
                />
                <Canvas />
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  console.log('mapping', state)
  return {
    stickers: state.sticker.stickers,
    user: state.user,
    stories: state.stories.allStories
    // page: state.allPages.pages
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllStories: userId => dispatch(fetchAllStories(userId)),
    fetchStickers: () => dispatch(fetchStickers()),
    getUser: () => dispatch(me())
    // fetchPageToEdit: pageId => dispatch(fetchPageToEdit(pageId))
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(HomeView))

// 1 ) this.canvas = new fabric.Canvas('my-canvas')  :: change our canvas from this.state to this.canvas
// 2 ) move drawOnCanvas from drawingTool component to HomeView component
// 3) be sure to change onClick to this.props.drawOnCanvas since the function is now pass from the Homeview component as a props
// 4) On Homeview component,  make sure to pass props on Drawing Tool compoennt (line 120)
//    - you need to pass 1) this.canvas (our canvas)   2) drawOnCanvas function
