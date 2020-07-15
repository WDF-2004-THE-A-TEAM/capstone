import React, {Component} from 'react'

class Canvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="canvas-size">
        <canvas id="my-canvas"> </canvas>
      </div>
    )
  }
}

export default Canvas
