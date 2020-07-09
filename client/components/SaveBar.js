import React, {Component} from 'react'
import {fabric} from 'fabric'
import PopUp from './SavePopUp'
import Canvas from './Canvas'
import {saveAs} from 'file-saver'

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
    console.log('cafter', this.state)
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

  render() {
    return (
      <div>
        <button onClick={() => this.exportFile()}> EXPORT </button>
        <button onClick={() => this.saveFile()}> SAVE </button>
        {/* <div className="btn" onClick={this.togglePop}>
            <button>SAVE CANVAS</button>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null} */}
      </div>
    )
  }
}

// import React from "react";
// import PopUp from "./PopUp";

// // export default class App extends React.Component {
//   state = {
//     seen: false
//   };

// togglePop = () => {
//   this.setState({
//     seen: !this.state.seen
//   });
// };

//   render() {
// return (
//   <div>
//     <div className="btn" onClick={this.togglePop}>
//       <button>New User?</button>
//     </div>
//     {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
//   </div>
//     );
//   }
// }

// class PopUp extends Component{

//   render(){
//     return (
//       <div>
//         <h1> Are you ready to save? </h1>
//         <button> Save as newStory </button>
//         <button> Save as page</button>
//       </div>

//     )
//   }
// }
export default SaveBar
