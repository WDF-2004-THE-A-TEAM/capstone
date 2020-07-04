/* global describe beforeEach it */

// write test for front-end :
// 1) testing drag and drop functionality
// 2) checking that <HomeView> includes <StickerBar><Canvas>

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({adapter})

// import react component here //
import HomeView from './HomeView.js'
import StickerBar from './StickerBar'
import Canvas from './Canvas'

describe('<HomeView/> component', () => {
  let homeView

  beforeEach(() => {
    homeView = shallow(<HomeView />)
  })

  it('includes <StickerBar> and <Canvas> components', () => {
    expect(homeView.containsMatchingElement(<StickerBar />)).to.be.equal(true)
    expect(homeView.containsMatchingElement(<Canvas />)).to.be.equal(true)
    expect(homeView.find(HomeView).length).to.be.equal(2)
  })

  it('each sticker has a method addToCanvas, which move the sticker to a canvas', () => {
    // expect(homeView.instance().addToCanvas).to.be.function
  })
})

describe('<StickerBar/> component', () => {
  let stickerBar

  beforeEach(() => {
    stickerBar = shallow(<StickerBar />)
  })

  it('render all stickers', () => {
    expect(stickerBar.find(StickerBar).length).to.be.equal(3)
  })
})
