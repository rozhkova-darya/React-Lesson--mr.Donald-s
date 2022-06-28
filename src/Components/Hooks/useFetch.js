import { useEffect, useState } from "react";

export const useFetch = () => {
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);

   useEffect( () => {

      const fetchData = async () => {
         try {
            const json = await fetch('DB.json');
            const res = await json.json();
            setResponse(res);
         } catch {
            setError('Упс... Произошла ошибочка!');
         }
      }
      fetchData()
      
   }, []);

   return {response, error};
}