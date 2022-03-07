import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styled from 'styled-components'
import theme from 'styles/theme'
import getCoins from 'store/actions/coinActions'
import loadUser from 'store/actions/userActions'
import GlobalStyle from 'styles/globalStyle'
import 'i18n'
import Routes from 'Routes'
import 'react-toastify/dist/ReactToastify.css'

const StyledBox = styled(Box)`
  height: 100vh;
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    height: 100vw;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const loadInitialData = () => {
    dispatch(loadUser())
    dispatch(getCoins())
  }
  useEffect(() => {
    loadInitialData()
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastContainer />
        <StyledBox display="flex" flexDirection="column">
          <Container
            className="full-height-container"
            maxWidth="xs"
            disableGutters
          >
            <Routes />
          </Container>
        </StyledBox>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
