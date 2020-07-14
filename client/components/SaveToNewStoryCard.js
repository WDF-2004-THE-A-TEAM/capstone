import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const SaveToNewStoryCard = props => {
  const [open, setOpen] = React.useState({
    state: false,
    title: ''
  })

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

  const handleChange = event => {
    event.preventDefault()
    const titleLabel = event.target.id
    const title = event.target.value
    console.log('title==', titleLabel, title)
    setOpen({
      ...open,
      [titleLabel]: title
    })
    console.log(open)
  }

  //SAVE AS JSON for local database
  // const saveAsNewStory = () => {
  //   let canvasJSON = JSON.stringify(props.canvas.toDatalessJSON())
  //   let newStory = {
  //     title: open.title,
  //     canvasJson: canvasJSON
  //   }
  //   console.log('SAVE AS NEW STORY====', newStory)
  //   props.addStory(props.user.id, newStory)
  //   handleClose()
  // }

  const dataURItoBlob = dataURI => {
    var binary = atob(dataURI.split(',')[1])
    var array = []
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i))
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
  }

  //SAVE AS JPG FOR AWS IMAGE HOSTING
  const saveAsNewStory = () => {
    const canvas = document.getElementById('my-canvas')
    const dataUrl = canvas.toDataURL('image/jpeg')
    console.log('dataUrl=>', dataUrl)

    const blobData = dataURItoBlob(dataUrl)
    // console.log('blob data=>', blobData)

    const params = {Body: blobData}

    // console.log('params =>', params)
    // bucket.upload
    // canvas.toBlob()
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Save As New Story
      </Button>
      <Dialog
        open={open.state}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Enter a new title for your story
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Congratulations on starting your new story! Please enter a title for
            your new story:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            onChange={handleChange}
            label="eg: Three Little Pigs"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveAsNewStory} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SaveToNewStoryCard
