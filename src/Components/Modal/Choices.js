import React from "react";
import styled from "styled-components";

const ChoicesWrapper = styled.div`
   column-count: 2;
   column-gap: 10px;
`;

const ChoicesLabel = styled.label`
cursor: pointer;
   display: block;
   margin-bottom: 10px;`;

const ChoicesRadio = styled.input`
   margin-right: 5px;
`;


export function Choices({openItem, choice, changeChoices}) {
   return (
      <>
         <h3>Выбирайте:</h3>
         <ChoicesWrapper>
            {openItem.choices.map((item, i) => (
               <ChoicesLabel key={i}>
                  <ChoicesRadio
                     type="radio"
                     name="choices"
                     checked={choice === item}
                     value={item}
                     onChange={changeChoices}
                  />
                  {item}
               </ChoicesLabel>
            ))}
         </ChoicesWrapper> 
      </>
   )
}