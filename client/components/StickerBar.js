import React from 'react'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'

import {makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    paddingTop: '60px',
    width: 500,
    height: 700
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
        <h1>STICKERS:</h1>
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
