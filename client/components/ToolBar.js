import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'

import ImageRoundedIcon from '@material-ui/icons/ImageRounded'
import TextTool from './TextTool'
import DrawingTool from './DrawingTool'

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
  console.log('props=>', props)

  const clearEl = () => {
    props.canvas.clear()
  }

  return (
    <div className={classes.root}>
      <ButtonGroup
        // className={classes.button}
        orientation="vertical"
      >
        <Button>
          <ImageRoundedIcon />
        </Button>

        <Button>
          <DrawingTool canvas={props.canvas} />
        </Button>

        <Button>
          <TextTool canvas={props.canvas} />
        </Button>

        <Button aria-label="delete" fontSize="large">
          <DeleteForeverRoundedIcon
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
