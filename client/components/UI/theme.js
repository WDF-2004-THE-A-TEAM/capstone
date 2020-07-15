import {createMuiTheme} from '@material-ui/core/styles'

const white = '#f4f6ff'
const yellow = '#ffcb74'
const orange = '#ea907a'
const blue = '#4f8a8b'

export default createMuiTheme({
  palette: {
    common: {
      orange,
      yellow
    },
    primary: {
      main: `${blue}`
    },
    secondary: {
      main: `${yellow}`
    }
  },
  typography: {
    fontFamily: `'Baloo Da 2',cursive`
  }
})
