import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {makeStyles} from '@material-ui/core/styles'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded'
import GestureRoundedIcon from '@material-ui/icons/GestureRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import ImageRoundedIcon from '@material-ui/icons/ImageRounded'
import TextTool from './TextTool'

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
          <CreateRoundedIcon />
        </Button>
        <Button>
          <TextTool canvas={props.canvas} />
        </Button>
        <Button aria-label="delete" fontSize="large">
          <DeleteForeverRoundedIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ToolBar
