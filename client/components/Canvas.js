import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Canvas extends Component {
  render() {
    return (
      <div>
        <h1> My Canvas</h1>
        <canvas id="canvas" width="600" height="600">
          {' '}
        </canvas>
      </div>
    )
  }
}

export default Canvas
