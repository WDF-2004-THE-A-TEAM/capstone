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

  render() {
    return (
      <div>
        <button onClick={() => this.props.exportFile()}> EXPORT </button>
        <button onClick={() => this.props.saveFile()}> SAVE </button>
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
