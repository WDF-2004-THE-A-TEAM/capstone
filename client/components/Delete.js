import React from 'react'
import Button from '@material-ui/core/Button'
import KeyboardEventHandler from 'react-keyboard-event-handler'

export default class Remove extends React.Component {
  constructor(props) {
    super(props)

    this.Remove = this.Remove.bind(this)
  }

  Remove() {
    this.props.canvas.getActiveObjects().forEach(obj => {
      this.props.canvas.remove(obj)
    })
  }

  render() {
    return (
      <div>
        <div>{this.props.eventKey}</div>
        <KeyboardEventHandler
          handleKeys={['backspace']}
          onKeyEvent={(key, e) => {
            this.Remove()
          }}
        ></KeyboardEventHandler>

        <Button
          id="text-tool"
          onClick={() => {
            this.Remove()
          }}
        >
          Delete
        </Button>
      </div>
    )
  }
}
