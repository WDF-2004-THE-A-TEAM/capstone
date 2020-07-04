import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      canvas: []
    }
  }
  componentDidMount() {
    let canvas = new fabric.Canvas('my-canvas')
  }

  addToCanvas(sticker) {
    console.log('clicked', sticker)

    fabric.Image.fromURL(sticker.imgURL, img => {
      img.scale(0.2)
      img.set({left: 100, top: 100})
      canvas
        .add(img)
        .renderAll()
        .setActiveObject(img)
    })
  }
  // componentDidMount(){
  //   const canvas = new fabric.Canvas('my-canvas')
  //   let triangle = new fabric.Rect({
  //     fill : 'red' ,
  //     left : 100 ,
  //     top : 100,
  //     width : 20 ,
  //     height : 20
  // })
  // canvas.add(triangle)
  // }

  render() {
    console.log('canvas props=', this.props.fabricCanvas)
    return (
      <div>
        <h1> My Canvas</h1>
        <canvas id="my-canvas" width="600" height="600" />
      </div>
    )
  }
}

export default Canvas
