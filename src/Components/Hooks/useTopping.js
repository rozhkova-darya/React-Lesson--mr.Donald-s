import {useState} from "react";

const getToppings = toppings => toppings.map(item => ({
   name: item,
   checked: false,
})); 

export function useToppings(openItem) {
   const readyToppings =  openItem.topping ? openItem.topping : openItem.toppings ? getToppings(openItem.toppings) : [];
   
   const [ toppings, setToppings ] = useState(readyToppings);
   const checkToppings = index => {
      setToppings(toppings.map((item, i) => {
         if(i === index) item.checked = !item.checked;
         
         return item;
      }))
   }
   return { toppings, checkToppings };
}