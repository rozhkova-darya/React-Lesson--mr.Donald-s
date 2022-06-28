import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../functions/context";

import { ref, set } from "firebase/database";

import {Overlay} from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from "./Order";
import { Button } from "../Style/Button";
import { projection } from "../functions/secondaryFunc";
import { totalPriceItems } from '../functions/secondaryFunc';
import { formatCurrency } from "../functions/secondaryFunc";

const Modal = styled.div`
   background: #fff;
   width: 600px;
   padding: 30px;
`;

const Text = styled.h3`
   text-align: center;
   margin-bottom: 30px;
`;

const rulesData = {
   name: ['name'],
   price: ['price'],
   count: ['count'],
   toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'not toppings'],
   choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (database, orders, authentication) => {
   const newOrder = orders.map(projection(rulesData));
   set(ref(database, 'orders/'),{
      name: authentication.displayName,
      email: authentication.email,
      order: newOrder,
   });
   
}

export const OrderConfirm = () => {

   const {
      database,
      auth: {authentication}, 
      orders: {orders, setOrders},
      orderConfirm: {setOpenOrderConfirm}
   } = useContext(Context);
   
   const total = orders.reduce((res, order) => totalPriceItems(order) + res, 0);

   return (
      <Overlay>
         <Modal>
            <OrderTitle>{authentication.displayName}</OrderTitle>
            <Text>Осталось только подтвердить ваш заказ</Text>
            <Total>
               <span>Итого</span>
               <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <Button onClick={() => {
               sendOrder(database, orders, authentication)
               setOrders([]);
               setOpenOrderConfirm(false);
            }}>Подтвердить</Button>
         </Modal>
      </Overlay>
   );
}