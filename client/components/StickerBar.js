import React from 'react'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'

import {makeStyles} from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Modal from '@material-ui/core/Modal'
import Popover from '@material-ui/core/Popover'
import ImageRoundedIcon from '@material-ui/icons/ImageRounded'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: 200,
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '5px'
  }
}))

const StickerBar = props => {
  const stickers = props.stickers
  const addToCanvas = props.addToCanvas
  //public/images/stickers/arch.png

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  //handles sticker popup
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  //Thie stickers are here in this body rendered below in the the Popover component
  const body = (
    <div id="sticker" className={classes.root}>
      <GridList className={classes.gridList} cellHeight={180} col={2}>
        {/* <h1>STICKERS:</h1> */}
        {stickers.map(sticker => {
          return (
            <GridListTile
              key={sticker.id}
              onClick={() => {
                addToCanvas(sticker)
              }}
            >
              <img src={`${sticker.imgURL}`} width="100%" height="auto" />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )

  return (
    <div>
      <ImageRoundedIcon
        fontSize="large"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      ></ImageRoundedIcon>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        marginThreshold={16}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {body}
      </Popover>
    </div>
  )
}

export default StickerBar
