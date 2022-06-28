import React from "react";
import styled from 'styled-components';
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";
import { useFetch } from "../Hooks/useFetch";

const MenuStyled = styled.main`
   background-color: #cccccc;
   margin-top: 80px;
   margin-left: 380px;
`;

const Section = styled.section`
   padding: 30px;
`;

export const Menu = () => {
   const res = useFetch();

   const DBMebu = res.response

   return (
      <MenuStyled>
         <Banner/>
        { res.response ? 
         <>
            <Section>
               <h2>Бургеры</h2>
               <ListItem itemList={DBMebu.burger}/>
            </Section>
            <Section>
               <h2>Закуски / Напитки</h2>
               <ListItem itemList={DBMebu.other}/>
            </Section>
         </> : res.error ?
         <div>Упс... Произошла ошибочка! Обновите страницу или попробуйте зайти позже :/</div> :
         <div>Загрузка</div>
         }
      </MenuStyled>
   )
}