import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'
import TextTool from './TextTool'
import DrawingTool from './DrawingTool'
import StickerBar from './StickerBar'
import Remove from './Delete'
import Tooltip from '@material-ui/core/Tooltip'

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
        <Tooltip title="STICKERS" placement="right-start">
          <Button>
            <StickerBar
              canvas={props.canvas}
              stickers={props.stickers}
              addToCanvas={props.addToCanvas}
            />
          </Button>
        </Tooltip>

        <Tooltip title="DRAW" placement="right-start">
          <Button>
            <DrawingTool canvas={props.canvas} />
          </Button>
        </Tooltip>

        <Tooltip title="TEXT" placement="right-start">
          <Button>
            <TextTool canvas={props.canvas} />
          </Button>
        </Tooltip>

        <Tooltip title="DELETE" placement="right-start">
          <Button>
            <Remove canvas={props.canvas} />
          </Button>
        </Tooltip>

        <Tooltip title="CLEAR CANVAS" placement="right-start">
          <Button aria-label="delete" fontSize="large">
            <ClearRoundedIcon
              onClick={() => {
                clearEl()
              }}
            />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}

export default ToolBar
