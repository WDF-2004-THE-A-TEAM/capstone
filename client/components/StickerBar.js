import React from 'react'
import PropTypes from 'prop-types'
import {fetchStickers} from '../store/sticker'

const StickerBar = props => {
  const stickers = props.stickers
  const addToCanvas = props.addToCanvas
  return (
    <div id="sticker">
      <h1> Stickers!!</h1>
      {stickers.map(sticker => {
        return (
          <div
            key={sticker.id}
            onClick={() => {
              addToCanvas(sticker)
            }}
          >
            <img src={sticker.imgURL} />
          </div>
        )
      })}
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
