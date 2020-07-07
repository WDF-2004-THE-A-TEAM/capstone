import React, {Component} from 'react'

class Canvas extends Component {
  constructor(props) {
    super(props)
  }


  clickToSave() {
    alert('save this page')
  }

  render() {
    return (
      <div>
        <div>
          <button id="save-button" onClick={() => this.clickToSave()}>
            SAVE
          </button>
          <h1> My Canvas</h1>
        </div>
        <canvas id="my-canvas" width="800" height="600" />
      </div>
    )
  }
}

export default Canvas
