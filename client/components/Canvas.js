import React, {Component} from 'react'

class Canvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> My Canvas</h1>
        <canvas id="my-canvas" width="800" height="600" />
      </div>
    )
  }
}

export default Canvas
