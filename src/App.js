import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import theme from 'styles/theme'
import rootReducer from 'store/reducers/rootReducer'
import GlobalStyle from 'styles/globalStyle'
import 'i18n'
import Routes from 'Routes'

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Box height="100vh" display="flex" flexDirection="column">
            <Container
              className="full-height-container"
              maxWidth="xs"
              disableGutters
            >
              <Routes />
            </Container>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
