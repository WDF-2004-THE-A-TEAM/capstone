import React, {Component} from 'react'
import {fabric} from 'fabric'
import PopUp from './SavePopUp'
import Canvas from './Canvas'
import {saveAs} from 'file-saver'
import {addStoryToUser} from '../store/stories'
import {connect} from 'react-redux'
import SaveToNewStoryCard from './SaveToNewStoryCard'

import Button from '@material-ui/core/Button'

class SaveBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seen: false
    }
    this.togglePop = this.togglePop.bind(this)
  }

  togglePop() {
    console.log('change status', this.state)
    this.setState({
      seen: !this.state.seen
    })
  }

  saveFile(title, canvas) {
    // 1) grab the canvas and convert to JSON
    // 2) make an axios request to add this JSON to DB
    console.log('saving file to DB')
    let canvasJSON = JSON.stringify(this.props.canvas.toDatalessJSON())
    console.log('JSON', canvasJSON)
    // console.log('toObject', this.canvas.toObject());//logs canvas as an object
    // console.log('toSVG', this.canvas.toSVG());//logs the SVG representation of canvas
  }

  exportFile() {
    // 1) grab canvas 'DOM' element
    // 2) call ToBlob function on the canvas DOM and SaveAs.'file_name.jpeg'
    const exportCanvas = document.getElementById('my-canvas')
    exportCanvas.toBlob(function(blob) {
      saveAs(blob, 'eureka_img.jpeg')
    })
  }

  render() {
    console.log('after', this.state)
    return (
      <div>
        <SaveToNewStoryCard
          canvas={this.props.canvas}
          addStory={this.props.addStoryToUser}
          user={this.props.user}
        />
        <Button onClick={() => this.exportFile()}> EXPORT </Button>
        <Button>ADD TO EXISTING STORY</Button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    stories: state.stories.allStories
  }
}

const mapDispatch = dispatch => {
  return {
    addStoryToUser: (userId, newStory) =>
      dispatch(addStoryToUser(userId, newStory))
  }
}
export default connect(mapState, mapDispatch)(SaveBar)
