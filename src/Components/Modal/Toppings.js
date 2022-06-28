import React from "react";
import styled from "styled-components";

const ToppingsWrapper = styled.div`
   column-count: 2;
   column-gap: 10px;
`;

const ToppingsLabel = styled.label`
   cursor: pointer;
   display: block;
   margin-bottom: 10px;
`;

const ToppingsCheckbox = styled.input`
   margin-right: 5px;
   
`;

export function Toppings({toppings, checkToppings}) {
   return (
      <>
         <h3>Добавки</h3>
         <ToppingsWrapper>
         {toppings.map((item, i) => (
            <ToppingsLabel key={i}>
               <ToppingsCheckbox 
                  type="checkbox" 
                  checked={item.checked} 
                  onChange={() => checkToppings(i)}
               />
               {item.name}
            </ToppingsLabel>
         ))}
            
         </ToppingsWrapper>
      </>
   )
}