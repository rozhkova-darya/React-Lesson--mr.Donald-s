import React, {useContext} from "react";
import styled from "styled-components";
import { useRef } from "react";
import trashImg from "../../image/trash.svg";
import { totalPriceItems } from '../functions/secondaryFunc';
import { formatCurrency } from "../functions/secondaryFunc";
import { Context } from "../functions/context";

const TrashButton = styled.button`
   width: 24px;
   height: 24px;
   background: url(${trashImg}) no-repeat center / contain;
`;

const OrderItemStyled = styled.li`
   margin: 15px 0;
   cursor: pointer;
`;
const OrderItemWrapper = styled.div`
   display: flex;
   width: 100%;
   justify-conten: space-between;
`;

const OrderItemToppings = styled.p`
   font-size: 12px;
   line-height: 130%;
   letter-spacing: 0.05em;
   max-width: 190px;
`;
const ItemName = styled.span`
   flex-grow: 1;
`;

const ItemPrice = styled.span`
   margin: 0 10px 0 30px;
   text-align: right;
`;

export const OrderListItem = ({order, index, deleteItem}) => {

   const {openItem: {setOpenItem}} = useContext(Context);

   const refDeleteBtn = useRef(null);

   return (
      <OrderItemStyled onClick={(e) => {
         e.target !== refDeleteBtn.current &&
            setOpenItem({...order, index})
      }}>
         <OrderItemWrapper>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteBtn} onClick={() => deleteItem(index)}/>
         </OrderItemWrapper>
         <OrderItemToppings>
            {order.topping.filter((item) => item.checked && item.name).map(item => item.name).join(', ')}
            
         </OrderItemToppings>
      </OrderItemStyled>
   )
};