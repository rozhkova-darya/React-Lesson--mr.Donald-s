import React, { useContext } from "react";
import styled from "styled-components";
import {Button} from "../Style/Button";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems } from '../functions/secondaryFunc';
import { formatCurrency } from "../functions/secondaryFunc";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { useToppings } from "../Hooks/useTopping";
import { useChoices } from "../Hooks/useChoices";
import { Context } from "../functions/context";

export const Overlay = styled.div`
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5); 
   z-index: 20;
`;

const Modal = styled.div`
   background: #fff;
   width: 600px;
   height: 600px;
`;

const Banner = styled.div`
   width: 100%;
   height: 200px;
   background: url(${({img}) => img}) no-repeat center / cover;
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 20px 50px;
   height: calc(100% - 200px);
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-item: center;
   font-family: Pacifico, cursive;
`;

const TotalPriceItem = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ModalItem = () => {

   const {
      openItem: {openItem, setOpenItem},
      orders: {orders, setOrders}
   } = useContext(Context);

   const counter = useCount(openItem.count);
   const toppings = useToppings(openItem);
   const choices = useChoices(openItem);
   const isEdit = openItem.index > -1;
   

   const order = {
      ...openItem,
      count: counter.count,
      topping: toppings.toppings,
      choice: choices.choice,
   }

   const closeModal = e => {
      if(e.target.id === 'overlay') {
         setOpenItem(null);
      };
   }

   const addToOrder = () => {
      setOrders([...orders, order]);
      setOpenItem(null);
   };

   const editOrder = () => {
      const newOrders = [...orders];
      newOrders[openItem.index] = order;
      setOrders(newOrders); 
      setOpenItem(null);
   }


   return (
      <Overlay id="overlay" onClick={closeModal}>
         <Modal>
            <Banner img={openItem.img}/>
            <Content>
               <Header>
                  <h3>{openItem.name}</h3>
                  <span>{formatCurrency(openItem.price)}</span>
               </Header>
               <CountItem {...counter}/>
               {openItem.toppings && <Toppings {...toppings}/>}
               {openItem.choices && <Choices {...choices} openItem={openItem}/>}
               <TotalPriceItem>
                  <span>Итоговая цена:</span>
                  <span>{formatCurrency(totalPriceItems(order))}</span>
               </TotalPriceItem>
               <Button 
                  onClick={isEdit ? editOrder : addToOrder} 
                  disabled={order.choices && !order.choice}
               >{isEdit ? 'Редактировать' : 'Добавить'}</Button>
            </Content>
         </Modal>
      </Overlay>
   )
};