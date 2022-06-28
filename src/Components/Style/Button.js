import styled from "styled-components";

export const Button = styled.button`
   display: block;
   padding: 20px 75px;
   background-color: #299B01;
   border: 2px solid transparent;
   font-size: 21px;
   color: white;
   margin: 0 auto;
   transition: all .3s;
   &:hover{
      background-color: #fff;
      border-color: #299B01;
      color: #299B01;
   }
   &:disabled{
      cursor: default;
      background-color: #fff;
      color: #bbb;
      border-color: #bbb;
   }
`