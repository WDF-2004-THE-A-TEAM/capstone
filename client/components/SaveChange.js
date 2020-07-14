import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const SaveChange = props => {
  const classes = useStyles()
  const [storyId, setStoryId] = React.useState('')
  const [open, setOpen] = React.useState({
    state: false
  })
  const [openDropDown, setOpenDropDown] = React.useState(false)

  const handleChange = event => {
    event.preventDefault()
    setStoryId(event.target.value)
    console.log(storyId)
  }

  const handleClickOpen = () => {
    setOpen({
      ...open,
      state: true
    })
  }

  const handleClose = () => {
    setOpen({
      ...open,
      state: false
    })
  }

  const handleCloseDropDown = () => {
    setOpenDropDown(false)
  }

  const handleOpenDropDown = () => {
    setOpenDropDown(true)
  }

  const saveAsNewPage = () => {
    let canvasJSON = JSON.stringify(props.canvas.toDatalessJSON())
    let newPage = {
      canvasPage: canvasJSON
    }
    props.addPage(storyId, newPage)
    handleClose()
  }

  const saveChange = async () => {
    console.log('saving change...')
    let pageID = props.PageId
    console.log('save pageId', pageID)

    let canvasJSON = JSON.stringify(props.canvas.toDatalessJSON())
    await axios.put(`/api/pages/${pageID}`, {pageID, canvasJSON})
    alert('successfully saved!')
    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Save Change
      </Button>
      <Dialog
        open={open.state}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Are you sure ?</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveChange} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SaveChange
