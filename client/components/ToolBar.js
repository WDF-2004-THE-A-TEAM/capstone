import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'
import TextTool from './TextTool'
import DrawingTool from './DrawingTool'
import StickerBar from './StickerBar'
import Remove from './Delete'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const ToolBar = props => {
  const classes = useStyles()

  const clearEl = () => {
    props.canvas.clear()
  }

  return (
    <div className={classes.root}>
      <ButtonGroup orientation="vertical">
        <Button>
          <StickerBar
            canvas={props.canvas}
            stickers={props.stickers}
            addToCanvas={props.addToCanvas}
          />
        </Button>

        <Button>
          <DrawingTool canvas={props.canvas} />
        </Button>

        <Button>
          <TextTool canvas={props.canvas} />
        </Button>

        <Button>
          <Remove canvas={props.canvas} />
        </Button>

        <Button aria-label="delete" fontSize="large">
          <ClearRoundedIcon
            onClick={() => {
              clearEl()
            }}
          />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ToolBar
