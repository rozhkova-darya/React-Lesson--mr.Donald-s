import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;

const CountInput = styled.input`
   width: 50px;
   text-align: center;
   font-weight: 600;
   
`;

const CountButton = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   background: #299B01;
   border-radius: 100%;
   text-align: center;
   color: white;
   margin: 0 10px;
`;



export function CountItem({ count, setCount, onChange }) {

   return (
      <CountWrapper>
         <span>Количество</span>
         <div>
            <CountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>-</CountButton>
            <CountInput type="number" min="1" max="50" value={count < 1 ? 1 : count} onChange={onChange}/>
            <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
         </div>
      </CountWrapper>
   )
}