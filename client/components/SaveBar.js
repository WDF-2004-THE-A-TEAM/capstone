import React, {Component} from 'react'
import {fabric} from 'fabric'
import PopUp from './SavePopUp'
import Canvas from './Canvas'
import {saveAs} from 'file-saver'
import {addStoryToUser, fetchAllStories} from '../store/stories'
import {me} from '../store/user'
import {addPageToStory} from '../store/pages'
import {connect} from 'react-redux'
import SaveToNewStoryCard from './SaveToNewStoryCard'
import AddPageToStory from './AddPageToStory'
import SaveChange from './SaveChange'
import Button from '@material-ui/core/Button'

const SaveBar = props => {
  const saveFile = (title, canvas) => {
    let canvasJSON = JSON.stringify(this.props.canvas.toDatalessJSON())
  }

  const exportFile = () => {
    // 1) grab canvas 'DOM' element
    // 2) call ToBlob function on the canvas DOM and SaveAs.'file_name.jpeg'
    const exportCanvas = document.getElementById('my-canvas')
    exportCanvas.toBlob(function(blob) {
      saveAs(blob, 'eureka_img.jpeg')
    })
  }

  return (
    <div>
      <Button onClick={() => exportFile()}> EXPORT </Button>
      <SaveToNewStoryCard
        canvas={props.canvas}
        addStory={props.addStoryToUser}
        user={props.user}
      />
      <AddPageToStory
        canvas={props.canvas}
        addPage={props.addPage}
        getAllStories={props.getAllStories}
        stories={props.stories}
        user={props.user}
      />
      <SaveChange
        canvas={props.canvas}
        addPage={props.addPage}
        getAllStories={props.getAllStories}
        stories={props.stories}
        user={props.user}
        PageId={props.pageId}
      />
    </div>
  )
}

// const mapState = state => {
//   return {
//     stories: state.stories.allStories,
//   }
// }

const mapDispatch = dispatch => {
  return {
    addStoryToUser: (userId, newStory, fileToUpload) =>
      dispatch(addStoryToUser(userId, newStory, fileToUpload)),
    addPage: (storyId, newPage) => dispatch(addPageToStory(storyId, newPage))
  }
}
export default connect(null, mapDispatch)(SaveBar)
