import React from 'react'
import ReactDOM from 'react-dom/client'

import { MyContext } from './MyContext'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{email:"samuel@email.com"}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
