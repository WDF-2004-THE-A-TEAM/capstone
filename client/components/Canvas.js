import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Canvas extends Component {
  constructor() {
    super()

    this.state = {
      canvas: []
    }
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
    return (
      <div>
        <h1> My Canvas</h1>
        <canvas id="my-canvas" width="600" height="600" />
      </div>
    )
  }
}

export default Canvas
