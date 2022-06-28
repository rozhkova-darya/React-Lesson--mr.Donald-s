import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body{
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }
  img{
    max-width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  input, button{
   cursor: pointer;
   background: none;
   border: none;
   color: inherit;
   font: inherit;
  }
  input[type="number"]{
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  ul{
    list-style: none;
  }
  h1, h2, h3{
    font-family: Pacifico, cursive;
    font-weight: 400;
  }
`