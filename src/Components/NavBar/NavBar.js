import React, { useContext } from "react";
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import logInImg from '../../image/sign.svg';
import siginImg from '../../image/sign.svg';

import { Context } from "../functions/context";

 
const NavBarStyled = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
   height: 80px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px;
   background-color: #299B01;
   color: white;
`;

const Logo = styled.div`
   display: flex;
   align-items: center;
`;

const H1 = styled.h1`
   font-size: 24px;
   margin-left: 15px;
`;

const ImgLogo = styled.img`
   width: 50px;
`;

const LogIn = styled.button`
   display: grid;
   grid-row-gap: 5px;
   justify-items: center;
`;
const ImgLogIn = styled.img`
   width: 32px;
`;

const User = styled.div`
   display: flex;
   align-items: center;
   text-align: center;
`;

const LogOut = styled.button`
   font-weight: 700;
   margin: 0 15px 0 30px;
`;

const Figure = styled.figure`
   margin: 0;
`;

export const NavBar = () => {

   const {auth : {authentication, logIn, logOut} } = useContext(Context);


   return (
      <NavBarStyled>
         <Logo>
            <ImgLogo src={logoImg} alt="Logo mr.Donald's"/>
            <H1>MRDonald's</H1>
         </Logo>
         {authentication ?
            <User>
               <Figure>
                  <img src={siginImg} alt={authentication.displayName}/>
                  <figcaption>{authentication.displayName}</figcaption>
               </Figure>
               <LogOut title="Выйти" onClick={logOut}>X</LogOut>
            </User>
         : 
         <LogIn onClick={logIn}>
            <ImgLogIn src={logInImg}/>
            войти
         </LogIn>
         }
      </NavBarStyled>
   )

}