import { useState } from "react";

export function useChoices(openItem) {
   const [choice, setChoices] = useState();

   function changeChoices(e) {
      setChoices(e.target.value);
   }

   return {choice, changeChoices};
}