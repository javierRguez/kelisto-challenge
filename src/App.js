import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers/rootReducer'
import GlobalStyle from 'styles/GlobalStyle'
import 'i18n'
import Routes from 'Routes'

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
