import React, {Component} from 'react'

class Canvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <h1> My Canvas</h1>
        </div>
        <canvas id="my-canvas" width="1000" height="1000" />
      </div>
    )
  }
}

export default Canvas
