import { createTheme } from '@mui/material/styles'
import colors from './colors'

const {
  primaryMain,
  primaryLight,
  primaryDark,
  secondaryMain,
  textPrimaryMain,
  textSecondaryMain,
  positivePriceMain,
  positivePriceLight,
  positivePriceDark,
  negativePriceMain,
  negativePriceLight,
  negativePriceDark,
} = colors

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
      light: primaryLight,
      dark: primaryDark,
    },
    secondary: {
      main: secondaryMain,
    },
    textPrimary: {
      main: textPrimaryMain,
    },
    textSecondary: {
      main: textSecondaryMain,
    },
    positivePrice: {
      main: positivePriceMain,
      light: positivePriceLight,
      dark: positivePriceDark,
    },
    negativePrice: {
      main: negativePriceMain,
      light: negativePriceLight,
      dark: negativePriceDark,
    },
  },
})
export default theme
