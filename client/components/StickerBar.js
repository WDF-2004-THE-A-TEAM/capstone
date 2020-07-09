import React from 'react'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'

import {makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import testImg from '../../public/images/stickers/banana.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}))

const StickerBar = props => {
  const stickers = props.stickers
  console.log('sticker', stickers)
  const addToCanvas = props.addToCanvas
  //public/images/stickers/arch.png

  const classes = useStyles()
  console.log(stickers)
  return (
    <div id="sticker" className={classes.root}>
      <GridList className={classes.gridList} cellHeight={160} col={3}>
        <h1> Stickers!!</h1>
        <img src={testImg} />
        {stickers.map(sticker => {
          return (
            <GridListTile
              key={sticker.id}
              onClick={() => {
                addToCanvas(sticker)
              }}
            >
              <img src={`${sticker.imgURL}`} width="100" height="auto" />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default StickerBar
