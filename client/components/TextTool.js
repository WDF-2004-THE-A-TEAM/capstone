import React from 'react'
import Button from '@material-ui/core/Button'
import {fabric} from 'fabric'
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded'

export default class TextTool extends React.Component {
  constructor(props) {
    super(props)

    this.AddText = this.AddText.bind(this)
  }

  AddText() {
    this.props.canvas.add(
      new fabric.IText('Text', {
        left: 50,
        top: 100,
        fontFamily: 'arial',
        fill: '#333',
        fontSize: 50
      })
    )
  }

  render() {
    return (
      <TextFieldsRoundedIcon
        fontSize="large"
        id="text-tool"
        color="#4f6d7a"
        onClick={() => {
          this.AddText()
        }}
      >
        Text
      </TextFieldsRoundedIcon>
    )
  }
}
