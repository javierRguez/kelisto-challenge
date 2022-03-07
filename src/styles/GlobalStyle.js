import { createGlobalStyle } from 'styled-components'
import colors from './theme/colors'

export default createGlobalStyle`
  html, body {
    height: 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) { 
  html { 
    transform: rotate(-90deg); 
    transform-origin: left top;
    width: 100vh; 
    overflow-x: hidden; 
    position: absolute; 
    top: 100%; 
    left: 0; 
  }
}
  
  body {
    min-width: 320px;
    margin: 0;
    font-family: 'Roboto';
    background-color:${colors.primaryMain} ;
  }

  ::-webkit-scrollbar {
  width: 4px;
  background-color: #bbb;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #717171;
}

  .rounded-button{
    border-radius:10px !important ;
  }

  .full-height-container{
    height:100% ;
  }
`
