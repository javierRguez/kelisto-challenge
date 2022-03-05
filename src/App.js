import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
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
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
