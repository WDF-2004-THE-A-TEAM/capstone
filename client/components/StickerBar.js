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
    width: 500,
    height: 450
  }
}))

const StickerBar = props => {
  const stickers = props.stickers
  console.log('sticker', stickers)
  const addToCanvas = props.addToCanvas

  const classes = useStyles()
  return (
    <div id="sticker" className={classes.root}>
      <GridList className={classes.gridList} cellHeight={160} col={3}>
        <h1> Stickers!!</h1>
        {stickers.map(sticker => {
          return (
            <GridListTile
              key={sticker.id}
              onClick={() => {
                addToCanvas(sticker)
              }}
            >
              <img src={sticker.imgURL} />
            </GridListTile>
          )
        })}
      </GridList>
    </div>
  )
}

export default StickerBar

// export class StickerBar extends React.Component {
//   constructor(props) {
//     super(props)

//     this.addToCanvas = this.addToCanvas.bind(this)
//   }

//   componentDidMount() {
//     this.props.fetchStickers()
//   }

// addToCanvas(sticker) {
//   console.log('clicked', sticker)
//   const canvas = new fabric.Canvas('my-canvas')

//   fabric.Image.fromURL(sticker.imgURL, img => {
//     img.scale(0.2)
//     img.set({left: 100, top: 100})
//     canvas
//       .add(img)
//       .renderAll()
//       .setActiveObject(img)
//   })

//   // console.log("image",image)
// }

//   render() {
//     const stickers = this.props.stickers
//     return (
//       <div id="sticker">
//         <h1> Stickers!!</h1>
//         {stickers.map(sticker => {
//           return (
//             <div key={sticker.id} onClick={() => this.addToCanvas(sticker)}>
//               <img src={sticker.imgURL} />
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// const mapState = state => {
//   console.log('mapState', state)
//   return {
//     stickers: state.sticker.stickers
//   }
// }

// const mapDispatch = dispatch => ({
//   fetchStickers: () => dispatch(fetchStickers())
// })

// export default connect(mapState, mapDispatch)(StickerBar)
