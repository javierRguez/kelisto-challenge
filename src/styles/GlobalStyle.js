import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto';
  }

  .App{
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
  }
`
