import React from 'react'
import Button from '@material-ui/core/Button'

export default class DrawingTool extends React.Component {
  constructor(props) {
    super(props)

    // this.drawOnCanvas = this.drawOnCanvas.bind(this)
  }

  componentDidMount() {
    // this.props.canvas.isDrawingMode = false
    // this.props.canvas.freeDrawingBrush.width = 15
    // this.props.canvas.freeDrawingBrush.color = '#00aeff'
  }

  // drawOnCanvas() {
  //   console.log('drawing....')
  //   this.props.canvas.isDrawingMode = !this.props.canvas.isDrawingMode
  //   if (this.props.canvas.isDrawingMode) {
  //     document.getElementById('draw-button').innerHTML = 'Draw Mode ON'
  //   } else {
  //     document.getElementById('draw-button').innerHTML = 'Draw Mode OFF'
  //   }
  // }

  render() {
    return (
      <Button
        id="draw-button"
        onClick={() => {
          this.props.drawOnCanvas()
        }}
      >
        Draw Mode : OFF
      </Button>
    )
  }
}
