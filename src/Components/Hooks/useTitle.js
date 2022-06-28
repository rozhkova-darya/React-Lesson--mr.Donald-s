import { useEffect } from "react";

export const useTitle = openItem => {
   useEffect(() => {
      document.title = openItem ? `MRDonald's - ${openItem.name}` : `MRDonald's`;
   }, [openItem]);
}