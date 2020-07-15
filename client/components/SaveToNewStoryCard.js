import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import axios from 'axios'

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

  const singleFileUploadHandler = fileToUpload => {
    const data = new FormData()
    // If file selected
    if (fileToUpload) {
      data.append('canvasImage', fileToUpload, fileToUpload.name)
      axios
        .post('/api/profile/canvas-img-upload', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                console.log('FILE TOO BIG')
              } else {
                console.log(response.data)
                // If not the given file type
              }
            } else {
              // Success
              let fileName = response.data
              console.log('fileData', fileName)
              console.log('FILE SUCCESSFULLY LOADED')
            }
          }
        })
        .catch(error => {
          // If another error
          console.error(error)
        })
    } else {
      // if file not selected throw error
      console.log('UPLOADD SOMETHING')
    }
  }

  //SAVE AS JPG FOR AWS IMAGE HOSTING
  const saveAsNewStory = () => {
    const canvas = document.getElementById('my-canvas')
    const dataUrl = canvas.toDataURL('image/jpeg')
    const blobData = dataURItoBlob(dataUrl)

    const imageFileToUpload = Object.assign(blobData, {
      name: `${open.title}.png`
    })

    singleFileUploadHandler(imageFileToUpload)

    let canvasJSON = JSON.stringify(props.canvas.toDatalessJSON())
    let newStory = {
      title: open.title,
      canvasJson: canvasJSON
    }
    console.log('SAVE AS NEW STORY====', newStory)
    props.addStory(props.user.id, newStory)
    handleClose()
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
