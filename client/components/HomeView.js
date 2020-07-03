import React from 'react'
import PropTypes from 'prop-types'
import StickerBar from './StickerBar'
import Canvas from './Canvas'

const HomeView = () => {
  return (
    <div className="homeview">
      <StickerBar />
      <Canvas />
    </div>
  )
}

export default HomeView
