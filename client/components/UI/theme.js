import {createMuiTheme} from '@material-ui/core/styles'

const imperialRed = '#E63946'
const honeydew = '#F1FAEE'
const powderBlue = '#A8DADC'
const celadonBlue = '#457B9D'
const prussianBlue = '#1D3557'

export default createMuiTheme({
  palette: {
    common: {
      celadonBlue,
      prussianBlue,
      powderBlue
    },
    primary: {
      main: `${honeydew}`
    },
    secondary: {
      main: `${imperialRed}`
    }
  },
  typography: {
    fontFamily: `'Baloo Da 2',cursive`
  }
})
