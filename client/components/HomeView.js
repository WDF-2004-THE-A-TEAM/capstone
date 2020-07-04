import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'
import StickerBar from './StickerBar'
import Canvas from './Canvas'

//This should be the parent component where it manages state
class HomeView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStickers()
  }

  render() {
    return (
      <div className="homeview">
        <StickerBar stickers={this.props.stickers} />
        <Canvas />
      </div>
    )
  }
}

const mapState = state => {
  return {
    stickers: state.sticker.stickers
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStickers: () => dispatch(fetchStickers())
  }
}

export default connect(mapState, mapDispatch)(HomeView)
