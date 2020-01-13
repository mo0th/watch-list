import "@babel/polyfill"
import React from "react"
import { render } from "react-dom"
import { IconContext } from "react-icons"
import { createGlobalStyle } from "styled-components"

import App from "#components/App"
import { WatchListProvider } from "#contexts/WatchListContext"
import { ICON_SIZE } from "#root/constants"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    font-family: Poppins, sans-serif;
    background: #1c1c1c;
    color: #eeeeee;
  }
`

render(
  <IconContext.Provider value={{size: ICON_SIZE}}>
    <WatchListProvider>
      <GlobalStyle />
      <App />
    </WatchListProvider>
  </IconContext.Provider>,
  document.getElementById("app")
)
