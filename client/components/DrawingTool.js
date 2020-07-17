import React from 'react'
import Button from '@material-ui/core/Button'
import GestureRoundedIcon from '@material-ui/icons/GestureRounded' //another drawing tool icon option
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  disabled: {
    backgroundColor: theme.palette.primary || 'red'
  }
})

class DrawingTool extends React.Component {
  constructor(props) {
    super(props)

    this.drawOnCanvas = this.drawOnCanvas.bind(this)
  }

  drawOnCanvas() {
    console.log('drawing....')
    this.props.canvas.isDrawingMode = !this.props.canvas.isDrawingMode
    if (this.props.canvas.isDrawingMode) {
      document.getElementById('draw-button').disabled = false
      document.getElementById('draw-button').style.color = 'black'
    } else {
      document.getElementById('draw-button').disabled = true
      document.getElementById('draw-button').style.color = 'grey'
    }
  }

  render() {
    return (
      <div>
        <GestureRoundedIcon
          id="draw-button"
          fontSize="large"
          disabled={true}
          onClick={() => {
            this.drawOnCanvas()
          }}
        ></GestureRoundedIcon>
      </div>
    )
  }
}

export default withStyles(styles)(DrawingTool)
