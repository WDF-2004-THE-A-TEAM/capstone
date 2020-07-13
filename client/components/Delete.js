import React from 'react'
import Button from '@material-ui/core/Button'

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
      <Button
        id="text-tool"
        onClick={() => {
          this.Remove()
        }}
      >
        Delete
      </Button>
    )
  }
}
