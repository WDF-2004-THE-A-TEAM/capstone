import React, {Component} from 'react'

class Canvas extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const canvas = document.getElementById('my-canvas')
    const context = canvas.getContext('2d')
    context.width = '100%'
    context.width = '100%'
  }

  render() {
    return (
      <div className="canvas-size">
        <canvas id="my-canvas" style={(width = '100%')}>
          {' '}
        </canvas>
      </div>
    )
  }
}

export default Canvas
