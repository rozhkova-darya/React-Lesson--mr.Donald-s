import React, {useContext} from "react";
import styled from 'styled-components';
import { formatCurrency } from "../functions/secondaryFunc";
import { Context } from "../functions/context";

const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;

const Item = styled.li`
   position: relative;
   font-size: 30px;
   width: 400px;
   height: 155px;
   background: ${({img}) => `url(${img}) no-repeat center / cover`};
   margin: 30px;
   padding: 15px;
   color: white;
   z-index: 1;
   transition: all .3s;
   &::after{
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: black;
      opacity: 0.3;
      z-index: -1;
      transition: opacity .3s;
   }
   &:hover{
      cursor: pointer;
      box-shadow: inset 0 0 50px 30px rgba(0,0,0,1);
      &::after{
         opacity: 0;
      }
   }
`;

export const ListItem = ({itemList}) => {

   const {openItem: {setOpenItem}} = useContext(Context)

   return (
      <List>
         {itemList.map(item => (
            <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
               <p>{item.name}</p>
               <p>{formatCurrency(item.price)}</p>
            </Item>
         ))}
      </List>
   )
}