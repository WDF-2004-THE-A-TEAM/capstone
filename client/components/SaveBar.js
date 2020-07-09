import React, {Component} from 'react'
import {fabric} from 'fabric'
import PopUp from './SavePopUp'
import Canvas from './Canvas'
import {saveAs} from 'file-saver'
import {addStoryToUser} from '../store/stories'
import {connect} from 'react-redux'

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
    console.log('after', this.state)
  }

  saveFile() {
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

  saveAsNewStory() {
    console.log('saving new story')
    let newStory = JSON.stringify(this.props.canvas.toDatalessJSON())
    console.log('JSON', newStory)
    this.props.addStoryToUser(newStory)

    // call addStoryToUser function //
    // mapState, mapDispatch
  }

  render() {
    return (
      <div>
        <button onClick={() => this.exportFile()}> EXPORT </button>
        <button onClick={() => this.saveAsNewStory()}>Save As New Story</button>
        <button>Add To Existing Story</button>

        {/* <button onClick={() => this.saveFile()}> SAVE </button> */}
        {/* <div className="btn" onClick={this.togglePop}>
            <button canvas={this.props.canvas}>SAVE CANVAS</button>
          </div>
          {this.state.seen ? <PopUp canvas={this.props.canvas}toggle={this.togglePop} /> : null} */}
      </div>
    )
  }
}

const mapState = state => {
  console.log('map state', state)
  return {
    stories: state.stories.allStories
  }
}

const mapDispatch = dispatch => {
  console.log('mapdispatch', dispatch)
  return {
    addStoryToUser: newStory => dispatch(addStoryToUser(newStory))
  }
}
export default connect(mapState, mapDispatch)(SaveBar)
