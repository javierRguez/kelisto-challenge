import { createGlobalStyle } from 'styled-components'
import colors from './theme/colors'

export default createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  body {
    min-width: 320px;
    margin: 0;
    font-family: 'Roboto';
    background-color:${colors.primaryMain} ;
  }

  .button{
    border-radius:10px ;
  }

  .full-height-container{
    height:100% ;
  }
`
