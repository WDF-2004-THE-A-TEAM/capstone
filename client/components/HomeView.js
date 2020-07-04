import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'
import StickerBar from './StickerBar'
import Canvas from './Canvas'
import {fabric} from 'fabric'

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
    return (
      <div className="homeview">
        <StickerBar
          addToCanvas={this.addToCanvas}
          stickers={this.props.stickers}
        />
        <canvas id="my-canvas" width="600" height="600" />
        {/* <Canvas /> */}
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

export default connect(mapState, mapDispatch)(HomeView)
