import React, {useContext} from "react";
import styled from "styled-components";

import { Button } from "../Style/Button";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from '../functions/secondaryFunc';
import { formatCurrency } from "../functions/secondaryFunc";

import { Context } from "../functions/context";

const OrderStyled = styled.section`
   position: fixed;
   top: 80px;
   left: 0;
   background: #fff;
   min-width: 380px;
   height: calc(100% - 80px);
   box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
   padding: 20px;
   display: flex;
   flex-direction: column;
`;

export const OrderTitle = styled.h2`
   text-align: center;
   text-transform: uppercase;
   margin-bottom: 30px;
`;

const OrderContent = styled.div`
   flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
   display: flex;
   margin-bottom: 30px;
   & span:first-child{
      flex-grow: 1;
   }
`;

export const TotalPrice = styled.span`
   margin: 0 30px;
   text-align: right;
`;

const  EmptyList = styled.p`
   text-align: center;
`;

export const Order = () => {

   const {  orders: {orders, setOrders},
            openItem: {setOpenItem},
            auth: {authentication, logIn},
            orderConfirm: {setOpenOrderConfirm}
         } = useContext(Context);

   const deleteItem = index => {
      const newOrders = orders.filter((item, i) => index !== i);
      setOrders(newOrders);
   }

   const total = orders.reduce((res, order) => totalPriceItems(order) + res, 0);

   const totalCounter = orders.reduce((result, order) => order.count + result, 0)

   return (
      <OrderStyled>
         <OrderTitle>Ваш заказ</OrderTitle>
         <OrderContent>
            {orders.length ? 
               <OrderList>
               {orders.map((order, index) => <OrderListItem 
                  key={index} order={order} 
                  deleteItem={deleteItem} 
                  index={index}
               />)}
               </OrderList> :
               <EmptyList>Вы еще ничего не выбрали</EmptyList>}
         </OrderContent>
         {orders.length ? 
            <>
               <Total>
                  <span>Итого</span>
                  <span>{totalCounter}</span>
                  <TotalPrice>{formatCurrency(total)}</TotalPrice>
               </Total>
               <Button onClick={() => {
               return  authentication ? setOpenOrderConfirm(true) : logIn
               }}>Оформить</Button>
            </> : null
         }
      </OrderStyled>
   )
};