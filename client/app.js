import React from 'react'

import {Navbar, StickerBar} from './components'
import Routes from './routes'
import theme from './components/UI/theme'

import {ThemeProvider} from '@material-ui/styles'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
        {/* <StickerBar/> */}
        {/* // add our canvas + tool bars + stickers bar //  */}
      </ThemeProvider>
    </div>
  )
}

export default App
