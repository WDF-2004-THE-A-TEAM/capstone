import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchStickers} from '../store/sticker'

export class StickerBar extends React.Component {
  componentDidMount() {
    this.props.fetchStickers()
  }

  render() {
    const stickers = this.props.stickers
    console.log('sticker', stickers)
    return (
      <div id="sticker">
        <h1> Stickers!!</h1>
        {stickers.map(sticker => {
          return (
            <div key={sticker.id}>
              {' '}
              <img src={sticker.imgURL} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  console.log('mapState', state)
  return {
    stickers: state.sticker.stickers
  }
}

const mapDispatch = dispatch => ({
  fetchStickers: () => dispatch(fetchStickers())
})

export default connect(mapState, mapDispatch)(StickerBar)
