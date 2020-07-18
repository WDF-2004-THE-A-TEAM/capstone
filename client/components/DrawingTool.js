import React from 'react'
import Button from '@material-ui/core/Button'
import GestureRoundedIcon from '@material-ui/icons/GestureRounded' //another drawing tool icon option
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import {withStyles} from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import Tooltip from '@material-ui/core/Tooltip'
import {borders} from '@material-ui/system'

const styles = theme => ({
  disabled: {
    backgroundColor: theme.palette.primary || 'red'
  },
  buttonStyle: {
    color: '#4F6D7A',
    padding: 35,
    borderRadius: '25%'
  }
})

class DrawingTool extends React.Component {
  constructor(props) {
    super(props)

    this.drawOnCanvas = this.drawOnCanvas.bind(this)
  }

  drawOnCanvas() {
    this.props.canvas.isDrawingMode = !this.props.canvas.isDrawingMode
    if (this.props.canvas.isDrawingMode) {
      document.getElementById('draw-button').disabled = false
      document.getElementById('draw-button').style.color = '#F7ACCF'
    } else {
      document.getElementById('draw-button').disabled = true
      document.getElementById('draw-button').style.color = '#4F6D7A'
    }
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{timeout: 600}}
          title="DRAW"
          placement="right-start"
          arrow
        >
          <Button variant="outlined">
            <GestureRoundedIcon
              className={classes.buttonStyle}
              id="draw-button"
              fontSize="large"
              disabled={true}
              onClick={() => {
                this.drawOnCanvas()
              }}
            ></GestureRoundedIcon>
          </Button>
        </Tooltip>
      </div>
    )
  }
}

export default withStyles(styles)(DrawingTool)
