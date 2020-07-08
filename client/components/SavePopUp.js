import React, {Component} from 'react'

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle()
  }

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>Ready to save? </h3>
            <label>
              Title :
              <input type="text" name="name" placeholder="three little pigs" />
            </label>
            <br />
            <button> Save as new story </button>
            <button> add to exiting story </button>
            <button> SAVE/TEST</button>
          </form>
        </div>
      </div>
    )
  }
}
